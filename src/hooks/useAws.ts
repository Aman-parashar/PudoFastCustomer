import AWS from 'aws-sdk';
import { AWS_CONFIG } from '../config/AppConfig';

// Initialize AWS config using consolidated AppConfig
AWS.config.update({
  accessKeyId: AWS_CONFIG.ACCESS_KEY,
  secretAccessKey: AWS_CONFIG.SECRET_KEY,
  region: AWS_CONFIG.REGION,
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();

/**
 * Upload files to S3 bucket
 * @param files Array of file objects with uri, type, and name
 * @returns Array of uploaded file URLs
 */
export const uploadImagesToS3 = async (
  files: { uri: string; type: string; name: string }[],
): Promise<string[]> => {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    try {
      // 1. Get Blob from the local URI
      const response = await fetch(file.uri);
      const blob = await response.blob();

      // 2. Prepare S3 upload parameters
      // NOTE: Using 'user/' folder for organized storage
      const params: AWS.S3.Types.PutObjectRequest = {
        Bucket: AWS_CONFIG.BUCKET_NAME,
        Key: `user/${Date.now()}_${file.name.replace(/\s+/g, '_')}`, // Sanitize filename
        Body: blob,
        ContentType: file.type,
        ACL: 'public-read', // Public access for backend visibility
      };

      // 3. Execute upload
      const data = await s3.upload(params).promise();
      console.log(`✅ File uploaded successfully: ${file.name}`, data.Location);
      uploadedUrls.push(data.Location);
    } catch (error: any) {
      // Improved error logging to help debug credential or permission issues
      console.error(`❌ AWS ERROR (${file.name}): ${error?.code} - ${error?.message}`);
      throw error; // Rethrow to let the UI react (if needed)
    }
  }

  return uploadedUrls;
};

export default s3;
