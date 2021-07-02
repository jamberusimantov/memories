
import React from "react";
import { useSelector } from "react-redux";
import { Container, IconButton, Menu, Paper, Typography } from '@material-ui/core';
import { MoreVert, AccountCircle, LockOpen } from '@material-ui/icons';
import useStyle from './style.UserSection';
import LoginForm from "../LoginForm";
import utils from "../../utils";


export default function UserSection(props: any) {
    const { responseHandler: { formResponse, messageHandler, isLogin, setIsLogin } } = props;
    const classes = useStyle()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event: any) => { setAnchorEl(event.currentTarget); };
    const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null); };
    const handleMenuClose = () => { setAnchorEl(null); handleMobileMenuClose(); };
    const handleMobileMenuOpen = (event: any) => { setMobileMoreAnchorEl(event.currentTarget); };
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const user = useSelector((state: any) => state.user);
    const { browserStorage: { removeToken } } = utils

    const logOutHandler = () => {
        removeToken();
        handleMenuClose();
        setIsLogin(false);
    }

    const userSection = (
        <Paper className={classes.paper}>
            {!isLogin ? <LoginForm responseHandler={{ formResponse, messageHandler, handleMenuClose }} /> :
                <IconButton
                    color="primary"
                    className={classes.formHead_button}
                    aria-label="log out"
                    onClick={logOutHandler}
                    component="span">
                    LOG OUT
                    <LockOpen />
                </IconButton>
            }
        </Paper>
    )

    return (
        <Container maxWidth='lg' className={classes.userSection}>
            <div className={classes.sectionDesktop}>
                <IconButton aria-label="account of current user"
                    edge="end"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                <Typography variant='h4'>{isLogin && user.name}</Typography>
            </div>

            <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit">
                    <MoreVert />
                </IconButton>
            </div>

            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}>
                {userSection}
            </Menu>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}>
                {userSection}
            </Menu>
        </Container>

    )
}
