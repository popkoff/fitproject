import React, {FC, ReactNode, useState} from 'react'
import styled from 'styled-components';
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import AuthProvider from "../context/AuthProvider";
import useAuth from "../common/hooks/useAuth";
import {useRouter} from "next/router";

type layoutAdminProps = {
    children: ReactNode;
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  background-color: #F7F8FC;
`;


const LayoutAdmin: FC<layoutAdminProps> = ({children}) => {

    const auth = useAuth();
    const router = useRouter();

    console.log(auth.isLoaded);
    console.log(auth.user);

    return auth.isLoaded? (
        <Container>
            <Sidebar/>
            <Content>
                <header>
                    < Navbar/>
                </header>
                <main>
                    {children}
                </main>
            </Content>
        </Container>

    ):(<div>... Loading</div>)
}

export default LayoutAdmin;

export const withLayout = (Component) => {


    class LayoutAdminComponent extends React.Component {
        render() {
            return (
                <AuthProvider>
                    <LayoutAdmin>
                        <Component {...this.props}/>
                    </LayoutAdmin>
                </AuthProvider>
            );
        }
    }

    return LayoutAdminComponent;
}