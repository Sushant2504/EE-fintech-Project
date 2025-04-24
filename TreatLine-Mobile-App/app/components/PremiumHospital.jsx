import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router"
import SubHeading from "./sub_Heading";


const PremiumHospital = () => {

    const Hospitals = {
        pune: [
            {
                id: 1,
                image: "https://imgs.search.brave.com/7rPZih9Ex6H0CeaIXV9_wpM-eSYwuBLtX1bSbiUv3ws/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTWtHa0Zr/alZxSVYwZ3JDS0Ns/b0lIX0hXSEFTWDZD/UFZ1S0VMND13NDgw/LWgzMDAtay1uLXJ3.jpeg",
                title: "Aundh Hospital",
                address: "Vidyapeeth Rd, Ward No. 8, Pune University, Aundh, Pune, Maharashtra 411007",
            },
            {
                id: 2,
                image: "https://imgs.search.brave.com/ur2VVadiaWUqH8lL4GVbJelKkRutNaba1uACZPhoWmI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL3Jm/L2ltYWdlX3NpemVf/NjMweDM1NC9IVC9w/Mi8yMDIwLzEwLzE4/L1BpY3R1cmVzL18y/MDM2N2FkYS0xMTJl/LTExZWItOTQ3Ny00/ZjQzMDczMGVjZjMu/anBn",
                title: "Aundh Gov Hospital",
                address: "Vidyapeeth Rd, Ward No. 8, Pune University, Aundh, Pune, Maharashtra 411007",
            },
            {
                id: 3,
                image: "https://imgs.search.brave.com/F6qpwwNnRPKjYs_RQMssyzbNCF0E92RI6Mk1H8gzQGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2EzL0thbWxhX05l/aHJ1X0hvc3BpdGFs/X0FsbGFoYWJhZC5q/cGc",
                title: "Kamla Nehru Hospital",
                address: "Apt 102, 123 Main St, Anytown, CA 91234",
            },
            {
                id: 4,
                image: "https://imgs.search.brave.com/GsLOpFVAdNttLMeZG8x4hDUn5eG3PPS4RvaKWvM0VbM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM0L0plaGFuZ2ly/X0hvc3BpdGFsX0J1/aWxkaW5nLmpwZw",
                title: "Jehangir Hospital",
                address: "Apt 102, 123 Main St, Anytown, CA 91234",
            },
            {
                id: 5,
                image: "https://imgs.search.brave.com/sHVoL5vBNZee8FaFiyxfWpW8WedaSvVh7BAeuRwP2Do/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5Lzg1LzQ2LzQ2/LzM2MF9GXzk4NTQ2/NDY4MV9ZVmJ0ZVlx/clhneDlyejc5djl5/U3FxcEpvdTRKMzdz/My5qcGc",
                title: "O.F.W.C Hospital",
                address: "Apt 102, 123 Main St, Anytown, CA 91234",
            }
        ],
        mumbai: [
            {
                id: 1,
                image: "https://www.indicure.com/assets/img/2022/02/Wockhardt-Hospitals-360x223.jpg.webp",
                title: "Wockhardt Hospital",
            },
            {
                id: 2,
                image: "https://www.indicure.com/assets/img/2022/02/Apollo-Hospitals-Mumbai.jpg.webp",
                title: "Apollo Hospital",
            },
            {
                id: 3,
                image: "https://www.indicure.com/assets/img/2022/02/Fortis-Hospital-Mulund-Mumbai.jpg.webp",
                title: "Fortis Hospital",
            },
            {
                id: 4,
                image: "https://www.indicure.com/assets/img/2022/02/Global-Hospitals-Mumbai.jpg.webp",
                title: "Gleneagles Global Hospital",
            },
            {
                id: 5,
                image: "https://www.indicure.com/assets/img/2022/02/Jaslok-Hospital-Mumbai.jpg.webp",
                title: "Jaslok Hospital",
            },
            {
                id: 6,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/Nanavati-Super-Speciality-Hospital,-Mumbai.jpg.webp",
                title: "Nanavati Hospital",
            },
            {
                id: 7,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/Fortis-Hiranandani-Hospital,-Vashi.jpg.webp",
                title: "Fortis Hiranandani Hospital",
            },
            {
                id: 8,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/Saifee-Hospital,-Mumbai.jpg.webp",
                title: "Saifee Hospital",
            },
            {
                id: 9,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/HCG-Cancer-Centre,-Mumbai.jpg.webp",
                title: "HCG Cancer Centre",
            },
            {
                id: 10,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/Asian-Heart-Institute,-Mumbai.jpg.webp",
                title: "Asian Heart Institute",
            },
            {
                id: 11,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/Neurogen-Brain-and-Spine-Institute,-Mumbai.jpg.webp",
                title: "Neurogen Brain & Spine Institute",
            },
            {
                id: 12,
                image: "https://www.indicure.com/assets/img/best-hospitals/Mumbai/Apollo-Spectra-Hospital,-Chembur.jpg.webp",
                title: "Apollo Spectra Hospital",
            }

        ],
        kolhapur: [
            {
                id: 1,
                image: "https://ind.5bestincity.com/profileimages/india/orange-multispeciality-hospital-pvtltd-multispeciality-hospitals-kolhapur-maharashtra/28867-ae092-1.jpg",
                title: "ORANGE MULTISPECIALITY HOSPITAL",
            },
            {
                id: 2,
                image: "https://ind.5bestincity.com/profileimages/india/sunrise-multispeciality-hospital-multispeciality-hospitals-kolhapur-maharashtra/28868-9318e-1.jpg",
                title: "SUNRISE MULTISPECIALITY HOSPITAL",
            },
            {
                id: 3,
                image: "https://ind.5bestincity.com/profileimages/india/sachin-multispeciality-hospital-multispeciality-hospitals-kolhapur-maharashtra/28866-e98cb-1.jpg",
                title: "SACHIN MULTISPECIALITY HOSPITAL",
            },
            {
                id: 4,
                image: "https://www.justdial.com/Kolhapur/Aster-Aadhar-Hospital-Near-Shastri-Nagar-Kmt-Workshop-Pratibhanagar/0231PX231-X231-120815184327-H8X5_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Kolhapur&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "Aster Aadhar Hospital",
            },
            {
                id: 5,
                image: "https://www.justdial.com/Kolhapur/Athaayu-Hospital-Ujalaiwadi/0231PX231-X231-170909125731-Z8Q3_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Kolhapur&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "Athaaya Hospital",
            },
            {
                id: 6,
                image: "https://www.justdial.com/Kolhapur/City-Hospital-Near-E-Ward-Rajarampuri/0231PX231-X231-091202174622-H1J9_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Kolhapur&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "City Hospital",
            }
        ],
        nashik: [
            {
                id: 1,
                image: "https://www.justdial.com/Nashik/Chopda-Hospital-Opposite-Market-Yard-Near-Mahalaxmi-Theatre-Panchavati/0253P253STD3000928_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Nashik&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "Chopda Hospital",
            },
            {
                id: 2,
                image: "https://www.justdial.com/Nashik/Surana-Hospital-Behind-Anuradha-Theatre-Near-Raps-Nashik-Road/0253P253STD1350174_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Nashik&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "Surana Hospital",
            },
            {
                id: 3,
                image: "https://www.justdial.com/Nashik/Patil-Bal-Rugnalaya-Near-Ganesh-Nagar-Kalvan/0253PX253-X253-180717144345-Z5H9_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Nashik&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "Patil Bal Rugnalaya",
            },
            {
                id: 4,
                image: "https://www.justdial.com/Nashik/Narayani-Hospital-Behind-Chhan-Hotel-Mumbai-Naka/0253PX253-X253-210706155313-V7F5_BZDET?trkid=&term=&ncatid=10253670&area=&search=Best%20Hospitals%20in%20Nashik&mncatname=Hospitals&abd_btn=&abd_heading=&bd=1&cat_b2b_flag=0&searchfrom=lst",
                title: "Narayani Hospital",
            }
        ],
    };


    return (
        <View>

            <SubHeading subHeadingtitle={'City Hospitsals'} />

            <FlatList
                data={Hospitals.pune}
                horizontal = {true}
                showHorizontalScrollIndicator = {false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HospitalItem hospital={item} />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        marginTop: 10,

    },
});


export default PremiumHospital;