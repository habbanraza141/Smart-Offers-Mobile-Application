import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../styles/colors';

const TextInputWithLabel = ({
    label,
    placeholder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <Text style={styles.labelTextStyle}>{label}

            </Text>
            <View
                style={styles.flexView}>

                <TextInput
                    placeholder={placeholder}
                    style={styles.inlineStyle}
                    {...props}
                />
                {!!rightIcon ?<TouchableOpacity
                activeOpacity={0.8}
                onPress={onPressRight}>
                <Image 
                source={rightIcon} />
                </TouchableOpacity>: null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        borderRadius: moderateScale(4),

    },

    inlineStyle: {
        fontSize: scale(16),
        color: colors.black,
        flex: 1
    },

    labelTextStyle: {
        fontSize: scale(14),
        color: colors.blackOpacity50
    },
    flexView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default TextInputWithLabel;
