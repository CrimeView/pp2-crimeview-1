import React from "react";

import { NavItem, NavLink } from "reactstrap";

export default function NavUser() {

    return (
        <>
            <NavItem>
                <NavLink
                    href="/report"
                >
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    <p>Reportar Crime</p>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink
                    href="/historico"
                >
                    <i class="fa fa-history" aria-hidden="true"></i>
                    Histórico de Report
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink
                    href="/conta"
                >
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                    Configurar Conta
                </NavLink>
            </NavItem>
        </>
    );

}