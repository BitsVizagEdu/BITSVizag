import { writable } from 'svelte/store';
export const dropdown=writable([
    false,false,false,false,false,false,false,false,false,false,false,false,false
])
export const NavItems = writable([
    {
        "name": "Home",
        "items": []
    },
    {
        "name": "About us",
        "items": ["About Bits", "Chairmans Message","Founders Message","Principal Message"]
    },
    {
        "name": "Courses",
        "items": ["Courses Offered", "Department of CSE","Department of ECE","Department of EEE","Department of MECH","Department of CIVIL","Department of MBA"]
    },

    {
        "name": "Staff",
        "items": ["Department of BS&H", "Department of CSE","Department of ECE","Department of EEE","Department of MECH","Department of CIVIL","Department of MBA","Department of Admin"]
    },
    {
        "name": "Academics",
        "items": []
    },
    {
        "name": "Exam Cell",
        "items": ["Engineering","MBA"]

    },
    {
        "name": "Facilities",
        "items": []
    },
    {
        "name": "Events",
        "items": []
    },
    {
        "name": "Gallery",
        "items": []
    },
    {
        "name": "IQAC",
        "items": ["NIRF 2022","2021-2022","2020-2021","Institute Credentials","RTA Act","Principal Munites of Meeting","Criteria 5","Criteria 1","2019-2020","IIQA Self Declaration","Minutes of Meeting and Actions Taken Reports","code of Conduct","criteria 20","Exam Cell Annual Report",'Criteria 6',"2018-2019","2017-2018","Feedback System","POs and PEOs","Procedures and Policies","Criteria 7","Student Satisfaction Survey","Others","Criteria 5 SSR"]
    },
    {
        "name": "NAAC",
        "items": ["Criteria 1","Criteria 2","Criteria 3","Criteria 4","Criteria 5","Criteria 6","Criteria 7","Profile for SSR","Extended Profile","Executive Summary"]
    },
    {
        "name": "Online Payment",
        "items": []
    },
    {
        "name": "Contact Us",
        "items": []
    },

])