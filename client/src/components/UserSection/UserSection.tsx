
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, IconButton, Menu, TextField, Button, Paper, MenuItem, LinearProgress, Typography } from '@material-ui/core';
import { MoreVert, AccountCircle } from '@material-ui/icons';
import useStyle from './style.UserSection';
import * as themeActions from '../../store/actions/theme.actions';
import Theme from '../../style'


export default function UserSection() {
    const classes = useStyle()
    const [formResponse, setFormResponse] = useState('')
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

    const {
        setPrimaryColor,
        setSecondaryColor,
        setEmphasizeColor,
        setPolygonHeight,
        setPolygonWidth,
        setPolygonOpacity,
        setUserTheme,
        setFontColor,
    } = themeActions
    const user = useSelector((state: any) => state.user);
    const theme = useSelector((state: any) => state.theme);
    const dispatch = useDispatch();
    const colors = Theme.colors

    const LinearWithValueLabel = () => (
        <div className={`${classes.root} ${classes.fullWidth}`}>
            <div className={`${classes.fullWidth} ${classes.flexCenter}`}>
                <LinearProgress
                    variant="determinate"
                    value={theme.polygonOpacity}
                    className={`${classes.fullWidth} ${classes.progress}`} />
            </div>
        </div>
    );

    // form response msg handler
    const messageHandler = (data: string) => {
        setFormResponse(data);
        setTimeout(() => { setFormResponse(''); }, 3000)
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(setUserTheme(theme, messageHandler));
    }
    const resetHandler = () => {
        setPrimaryColor(user.theme.primaryColor ||'#6cc644');
        setSecondaryColor(user.theme.secondaryColor ||  '#333');
        setEmphasizeColor(user.theme.emphasizeColor || "#f5f5f5");
        setPolygonHeight(user.theme.polygonHeight || 450);
        setPolygonWidth(user.theme.polygonWidth || 540);
        setPolygonOpacity(user.theme.polygonOpacity || 9);
        setFontColor(user.theme.fontColor || '#f5f5f5');
    }

    useEffect(() => {
        dispatch(setPrimaryColor(user.theme?.primaryColor || '#6cc644'));
    }, [dispatch, setPrimaryColor, colors, user.theme?.primaryColor])
    
    
    useEffect(() => {
        dispatch(setSecondaryColor(user.theme?.secondaryColor ||  '#333'));
    }, [dispatch, setSecondaryColor, colors, user.theme?.secondaryColor])
    
    useEffect(() => {
        dispatch(setEmphasizeColor(user.theme?.emphasizeColor || "#f5f5f5"));
    }, [dispatch, setEmphasizeColor, colors, user.theme?.emphasizeColor])
    
    useEffect(() => {
        dispatch(setPolygonHeight(user.theme?.polygonHeight || 450));
    }, [dispatch, setPolygonHeight, user.theme?.polygonHeight])
    
    useEffect(() => {
        dispatch(setPolygonWidth(user.theme?.polygonWidth || 540));
    }, [dispatch, setPolygonWidth, user.theme?.polygonWidth])
    
    useEffect(() => {
        dispatch(setPolygonOpacity(user.theme?.polygonOpacity || 9));
    }, [dispatch, setPolygonOpacity, user.theme?.polygonOpacity])
    
    useEffect(() => {
        dispatch(setFontColor(user.theme?.fontColor || '#f5f5f5'));
    }, [dispatch, setFontColor, colors, user.theme?.fontColor])

    const userSection = (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.form} ${classes.root}`}
                onSubmit={submitHandler}>

                {/* primary color */}
                <TextField
                    className={classes.input}
                    select
                    label="Primary Color"
                    value={theme.primaryColor || '#4078c0'}
                    onChange={(e: any) => dispatch(setPrimaryColor(e.target.value))}
                    helperText="Please select your primary color"
                    variant="outlined">
                    {colors.map(color => <MenuItem key={color.key} value={color.value}>{color.key?.toUpperCase()}</MenuItem>)}
                </TextField>

                {/* secondary color */}
                <TextField
                    className={classes.input}
                    select
                    label="Secondary Color"
                    value={theme.secondaryColor || '#f5f5f5'}
                    onChange={(e: any) => dispatch(setSecondaryColor(e.target.value))}
                    helperText="Please select your secondary color"
                    variant="outlined">
                    {colors.map(color => <MenuItem key={color.key} value={color.value}>{color.key?.toUpperCase()}</MenuItem>)}
                </TextField>

                {/* emphasize color */}
                <TextField
                    className={classes.input}
                    select
                    label="Emphasize Color"
                    value={theme.emphasizeColor || '#F4CBB2'}
                    onChange={(e: any) => dispatch(setEmphasizeColor(e.target.value))}
                    helperText="Please select your emphasize color"
                    variant="outlined">
                    {colors.map(color => <MenuItem key={color.key} value={color.value}>{color.key?.toUpperCase()}</MenuItem>)}
                </TextField>

                {/* polygon width */}
                <TextField
                    name='width'
                    variant='outlined'
                    label='Polygon Width'
                    fullWidth
                    type='number'
                    value={theme.polygonWidth || 540}
                    onChange={(e: any) => dispatch(setPolygonWidth(JSON.parse(e.target.value)))}>
                </TextField>

                {/* polygon height */}
                <TextField
                    name='height'
                    variant='outlined'
                    label='Polygon Height'
                    fullWidth
                    type='number'
                    value={theme.polygonHeight || 450}
                    onChange={(e: any) => dispatch(setPolygonHeight(JSON.parse(e.target.value)))}>
                </TextField>

                {/* polygon opacity */}
                <TextField
                    name='opacity'
                    variant='outlined'
                    label='Polygon Opacity'
                    fullWidth
                    type='number'
                    value={theme.polygonOpacity || 1}
                    onChange={(e: any) => dispatch(setPolygonOpacity(JSON.parse(e.target.value)))}>
                </TextField>

                {/* font color */}
                <TextField
                    name='font-color'
                    variant='outlined'
                    label='Font color'
                    fullWidth
                    value={theme.fontColor || '#f5f5f5'}
                    onChange={(e: any) => dispatch(setFontColor(e.target.value))}>
                </TextField>

                {/* polygon opacity progress bar */}
                <LinearWithValueLabel />

                {/* submit */}
                <Button
                    type='submit'
                    className={classes.buttonSubmit}
                    fullWidth
                    size='large'
                    color='primary'
                    onClick={handleMenuClose}
                    variant='contained'>
                    SET
                </Button>

                {/* reset */}
                <Button
                    type='reset'
                    className={classes.buttonReset}
                    fullWidth
                    size='small'
                    color='secondary'
                    variant='contained'
                    onClick={resetHandler}>
                    CLEAR
                </Button>

                {/* form response */}
                <Typography variant='h6'>{`${formResponse}`}</Typography>
            </form>
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
                <Typography variant='h4'>{user.name}</Typography>
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
