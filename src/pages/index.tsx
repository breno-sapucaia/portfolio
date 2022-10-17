import type { NextPage } from 'next';
import { Box, Button, Link, Paper, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import Instagram from '../assets/icons/insta.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import WhatsApp from '../assets/icons/zap.svg';

const Home: NextPage = () => {
  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          minHeight: '80px',
          width: '100%',
          position: 'fixed',
          top: 0,
          bgcolor: 'background.paper',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '190px',
          zIndex: 1000,
        }}
      >
        <Box display="flex" gap={4}>
          <Link underline="hover" color="primary">
            <Typography variant="body1">Home</Typography>
          </Link>
          {/* <Link underline="hover" color="primary">
            <Typography variant="body1">Skills</Typography>
          </Link>
          <Link underline="hover" color="primary">
            <Typography variant="body1">Contact</Typography>
          </Link>
          <Link underline="hover" color="primary">
            <Typography variant="body1">Experience</Typography>
          </Link> */}
        </Box>
        <Button
          component="a"
          variant="contained"
          color="primary"
          href="https://resume.io/r/BYzdlF48k"
          target="_blank"
        >
          <Typography variant="button">Check CV</Typography>
        </Button>
      </Paper>
      <Paper
        sx={{
          height: '100vh',
          mx: '120px',
          display: 'flex',
          px: 8,
        }}
      >
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flex="4"
            width="100%"
            alignItems="center"
            justifyContent="space-around"
            gap={8}
          >
            <Box
              alignSelf="flex-start"
              bgcolor="background.default"
              pt={14}
              height="70vh"
              width="450px"
              sx={{
                position: 'relative',
                borderRadius: '0px 0px 280px 280px',
                boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25);',
              }}
            >
              <Image
                src="/assets/img/breno!.png"
                alt="Eu com Meu cachorro"
                objectFit="contain"
                layout="fill"
                objectPosition={'100% 70%'}
              />
            </Box>
            <Box display="flex" flexDirection="column" flex="1" gap={2}>
              <Typography variant="h3" fontSize="48px">
                Hi, my name is
              </Typography>
              <Typography variant="h1" fontSize="64px" fontWeight={700}>
                Breno Sapucaia dos Santos Magalhães
              </Typography>
              <Typography variant="body2" fontSize="32px">
                I’m a fullstack developer, alocated in market for four years and
                passionate with it.
              </Typography>
              <Typography variant="body2" fontSize="32px">
                Fell free to know me down below or you can sent a message on my
                social medias down below.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Box
              display="flex"
              gap={4}
              px={6}
              py={3}
              bgcolor="background.default"
              borderRadius="100px"
              sx={{
                boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25);',
                svg: {
                  width: '42px',
                  height: '42px',
                  fill: ({ palette }) => palette.text.primary,
                  transition: 'all ease 250ms',
                  cursor: 'pointer',
                },
                'svg:hover': {
                  transform: 'scale(1.5)',
                },
                a: {
                  width: '42px',
                  height: '42px',
                },
              }}
            >
              <Tooltip title="E-Mail">
                <Link href="mailto:brenoss.magalhaes@gmail.com" target="_blank">
                  <Email />
                </Link>
              </Tooltip>
              <Tooltip title="Github">
                <Link href="https://github.com/breno-sapucaia" target="_blank">
                  <Github />
                </Link>
              </Tooltip>
              <Tooltip title="Linkedin">
                <Link
                  href="https://www.linkedin.com/in/breno-sapucaia/"
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </Tooltip>
              <Tooltip title="Instagram">
                <Link href="https://www.instagram.com/sapu.io/" target="_blank">
                  <Instagram />
                </Link>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Home;
