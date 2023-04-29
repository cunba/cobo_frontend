import { Box, HStack, Icon, NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface IconProps {
    type: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial" | undefined,
    name: string,
    style?: any,
    onPress: () => void
}

export interface ToolbarProps {
    title?: string;
    color?: string;
    textStyle?: any;
    iconLeft?: IconProps
    isIconLeft: boolean
    isIconRight: boolean
    iconRight?: IconProps
}

export const Toolbar = (props: ToolbarProps) => {
    return (
        <>
            <NativeBaseProvider>
                <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
                <Box safeAreaTop bg="violet.600" />
                <HStack style={props.color ? { backgroundColor: props.color, elevation: 3 } : styles.headerHome}>

                    <HStack style={styles.position}>
                        {props.isIconLeft ?
                            <TouchableOpacity
                                onPress={() => props.iconLeft!.onPress()}>
                                <Icon type={props.iconLeft!.type} name={props.iconLeft!.name ? props.iconLeft!.name : "left"} color={props.iconLeft!.style ? props.iconLeft?.style : 'white'} />
                            </TouchableOpacity>
                            : null
                        }
                    </HStack>
                    <HStack style={styles.textPosition}>
                        <Text style={props.textStyle}>{props.title} </Text>
                    </HStack>
                    <HStack style={styles.position}>
                        {props.isIconRight ?
                            <TouchableOpacity
                                onPress={() => props.iconRight!.onPress()}>
                                <Icon type={props.iconRight!.type} name={props.iconRight!.name} style={props.iconRight!.style ? props.iconRight!.style : { color: 'white' }} />
                            </TouchableOpacity>
                            : null
                        }
                    </HStack>

                </HStack>
            </NativeBaseProvider>
        </>
    );
};

export default Toolbar;

const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: 'transparent',
    },
    position: {
        paddingTop: 5,
        maxWidth: 50,
    },
    textPosition: {
        paddingTop: 5,
        alignItems: 'center',
    },
});