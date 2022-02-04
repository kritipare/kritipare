import React from 'react';

// import InputBase from '@material-ui/icons/InputBase';
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@material-ui/styles';
import { alpha, AppBar, Avatar, Box, IconButton, InputBase, Link, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import NavigationTabs from '../Navigation/NavigationTabs';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.header}>
        <Toolbar>
        {/* <Avatar
          padding={40}
          src="/images/k.png" 
          aria-label="recipe" /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            This is the header
          </Typography> */}
          <NavigationTabs />
          <Link href={process.env.REACT_APP_LINK_TO_CODE} className='p-1'> 
            <i class="fa fa-github fa-2x m-2" aria-hidden="true"></i>
          </Link>

          <Link href={process.env.REACT_APP_LINKEDIN_URL} className='p-1'> 
            <i class="fa fa-linkedin fa-2x m-2" aria-hidden="true"></i>
          </Link>
          

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
