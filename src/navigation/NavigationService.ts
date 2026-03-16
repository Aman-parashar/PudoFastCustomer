import { StackActions, CommonActions } from '@react-navigation/native';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
    _navigator?.dispatch(
        CommonActions.navigate({
            name: routeName,
            params,
        })
    );
}

function replace(routeName: string, params?: any) {
    _navigator?.dispatch(StackActions.replace(routeName, params));
}

function goBack() {
    _navigator?.dispatch(CommonActions.goBack());
}

function reset(routeName: string, params?: object) {
    _navigator?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: routeName,
                    params,
                },
            ],
        })
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    goBack,
    replace,
    reset,
};
