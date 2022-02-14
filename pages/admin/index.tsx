import styled from 'styled-components';
//services
import {QueryClient, QueryClientProvider} from "react-query";
import Passengers from "./passangers";
import SignUpForm from "../../common/form-admin/signUpForm";

import FormAdmin from "../../common/form-admin/form-admin";

const ContainerAdminRegistration = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #363740;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Admin() {

    return (
        <ContainerAdminRegistration>
            <FormAdmin/>
        </ContainerAdminRegistration>
    );
}

Admin.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
};