import React, {useState} from "react";
import {Button, Menu, Responsive, Sidebar} from "semantic-ui-react";
import NavPages from "./NavPages";
import NavPagesMenu from "./NavPagesMenu";

// Partially inspired by https://stackoverflow.com/a/46316014
const Navigation = (props) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return <>
        <Sidebar
            as={Menu}
            animation="overlay"
            direction="left"
            icon="labeled"
            inverted
            onHide={() => setSidebarVisible(false)}
            vertical
            visible={sidebarVisible}
            width="thin"
        >
            <NavPages/>
        </Sidebar>

        <Sidebar.Pusher style={{marginBottom: 30}} dimmed={sidebarVisible}>
            <Responsive maxWidth={767}>
                <NavPagesMenu mobile>
                    <Menu.Item as={Button} link onClick={() => setSidebarVisible(!sidebarVisible)}>Menu</Menu.Item>
                </NavPagesMenu>
            </Responsive>
            <Responsive minWidth={768}>
                <NavPagesMenu/>
            </Responsive>
        </Sidebar.Pusher>
    </>;

    //
    // return <div style={{marginBottom: 30}}>
    //
    //     <Responsive maxWidth={767}>
    //         <Menu>
    //             {logo}
    //             <Menu.Item>
    //                 {/*<Sidebar.Pusher>*/}
    //                 {/*    Sidebar*/}
    //                 {/*</Sidebar.Pusher>*/}
    //             </Menu.Item>
    //
    //         </Menu>
    //         {/*<Sidebar.Pushable>*/}
    //
    //         {/*    <Sidebar animation="overlay"*/}
    //         {/*             icon="labeled"*/}
    //         {/*             inverted*/}
    //         {/*             vertical*/}
    //         {/*             visible*/}
    //         {/*             width="thin">*/}
    //         {/*        test*/}
    //         {/*    </Sidebar>*/}
    //         {/*</Sidebar.Pushable>*/}
    //     </Responsive>
    //
    //     <Responsive as={Menu} minWidth={768}>
    //         {logo}
    //         {routes.map(route => <Menu.Item key={route.link} as={Link}
    //                                         to={route.link}>{route.name}</Menu.Item>)}
    //     </Responsive>


    // </div>
};


export default Navigation;
