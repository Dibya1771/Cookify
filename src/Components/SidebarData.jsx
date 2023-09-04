import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'          //class name
    },
    {
        title: 'My Profile',
        path: '/Profile',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Meal Details',
        path: '/',
        icon: <IoIcons.IoMdRestaurant />,
        cName: 'nav-text'
    },
    {
        title: 'Favourites',
        path: '/Favourites',
        icon: <IoIcons.IoMdHeart />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/About',
        icon: <IoIcons.IoMdInformationCircle />,   // IoMdInformationCircleOutline
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/Contact',
        icon: <FaIcons.FaIdCard />,
        cName: 'nav-text'
    }
];
