import React, {FC} from 'react';
import {IsidebarMenuItem} from "./menu.interface";
import styled from 'styled-components';
import Image from "next/image";

const sidebarMenuFires: IsidebarMenuItem[] = [
    {route: 'statistics', name: 'Statistics', icon: '/sidebarIcons/statistics.svg', id: 1},
    {route: 'users', name: 'Users', icon: '/sidebarIcons/users.svg', id: 2},
    {route: 'recipies', name: 'Recipies', icon: '/sidebarIcons/recipies.svg', id: 3},
    {route: 'exercises', name: 'Exercises', icon: '/sidebarIcons/articles.svg', id: 4},
    {route: 'messages', name: 'Messages', icon: '/sidebarIcons/messages.svg', id: 5},
    {route: 'articles', name: 'Articles', icon: '/sidebarIcons/articles.svg', id: 6},
];
const sidebarMenuSecond: IsidebarMenuItem[] = [
    {route: 'settings', name: 'Settings', icon: '/sidebarIcons/settings.svg', id: 7},
    {route: 'subscription', name: 'Subscription', icon: '/sidebarIcons/subscription.svg', id: 8},
];

const SidebarWrapper = styled.div`
  
  height: 100vh;
  background-color: #363740;
`;

const SidebarHeader = styled.div`
  padding:50px 28px 60px;
  background-color: #363740;
  width: 100%;
  font-size: 19px;
  color: #A4A6B3;
  &:hover{ 
    color:#DDE2FF;
  }
`;

const SidebarItem = styled.div`
  width: 100%;
  font-size: 16px;
  padding:16px 28px;
  color: #A4A6B3;
  &:hover{ 
  color:#DDE2FF;
    background-color: #3F4049;
    border-left:3px solid #DDE2FF;
    padding:16px 25px;
  }
`;

const ItemName = styled.span`
  padding-left:24px;
  display: inline-block;
`;

const Ul = styled.ul`
  width: 255px;
  padding:0px;
  margin:0px;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #40414A;
`;

const A = styled.a`
  display:flex;
  align-item:center;
`;

const Sidebar: FC = () => {

    const firstLavel = () => {
        return (
            <>
                {sidebarMenuFires.map(menu => (
                    <SidebarItem key={menu.route}>
                        <A href={`/${menu.route}`}>
                            <Image color='#3751FF' src={menu.icon} width='16' height='16' alt='search'/>
                            <ItemName>{menu.name}</ItemName>
                        </A>
                    </SidebarItem>
                ))}
            </>
        )
    }


    const secondLavel = () => {
        return (
            <>
                {sidebarMenuSecond.map(menu => (
                    <SidebarItem key={menu.route}>
                        <A href={`/${menu.route}`}>
                            <Image src={menu.icon} width='16' height='16' alt='search'/>
                            <ItemName>{menu.name}</ItemName>
                        </A>
                    </SidebarItem>
                ))}
            </>
        )
    }


    return (
        <SidebarWrapper>
            <SidebarHeader>
                <A href={`/`}>
                    <Image src='/sidebarIcons/logoApp.svg' width='32' height='32' alt='search'/>
                    <ItemName>Dashboard Kit</ItemName>
                </A>
            </SidebarHeader>
            <Ul>
                {firstLavel()}
                <Hr/>
                {secondLavel()}
            </Ul>
        </SidebarWrapper>
    );
};

export default Sidebar;