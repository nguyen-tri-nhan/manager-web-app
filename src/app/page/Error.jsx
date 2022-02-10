import { Box, Button, Container, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import { MESSAGE } from '../util/Constant';

const Error = ({ message = MESSAGE.NOT_FOUND }) => {

  document.title = 'Lỗi';

  const onBackButtonClick = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography
              align="center"
              color="textPrimary"
              variant="h1"
            >
              {message}
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="subtitle2"
            >
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <img
                alt="Under development"
                src="/static/images/undraw_page_not_found_su7k.svg"
                style={{
                  marginTop: 50,
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 560
                }}
              />
            </Box>
            <Button
              color="primary"
              startIcon={(<ArrowBack fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
              onClick={onBackButtonClick}
            >
              Go back to dashboard
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  )
};

export default Error;