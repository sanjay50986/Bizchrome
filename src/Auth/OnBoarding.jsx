import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '../constants/colors';

const { width } = Dimensions.get('window');


const onBoarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef();
    const slides = [
        {
            id: '1',
            image: require('../../assets/images/SlideLogo2.png'),
            title: 'Find Interesting Projects',
            description: 'Sign up quickly and explore freelance opportunities at no cost. Begin your journey today with no hidden fees or commitments',
        },
        {
            id: '2',
            image: require('../../assets/images/SlideLogo1.png'),
            title: 'Freelance Work on Demand',
            description: 'Lorem ipsum dolor sit amet consectetur. Ornare diam feugiat netus ultrices accumsan turpis nisi',
        },
        {
            id: '3',
            image: require('../../assets/images/SlideLogo3.png'),
            title: 'Get Started Free',
            description: 'Lorem ipsum dolor sit amet consectetur. Ornare diam feugiat netus ultrices accumsan turpis nisi',
        },
    ];

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={slides}
                ref={flatListRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfig}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
            />

            {/* Pagination Dots */}
            <View style={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
                ))}
            </View>
        </SafeAreaView>
    )
}

export default onBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    slide: {
        paddingTop: 60
    },
    image: {
        height: 250, width: '100%'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 60,
        fontFamily: "Poppins-Bold",
        color: Colors.textColor
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        paddingHorizontal: 18,
        fontFamily: "Poppins-Medium",
        color:"grey"
    },
    fingerIcon: {
        width: 40,
        height: 40,
        marginTop: 20
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        margin: 4,
    },
    activeDot: {
        backgroundColor: '#1D61E7',
        width: 16,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#1D61E7',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginBottom: 30,
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});

