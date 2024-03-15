import { Box, Container, Stack, Typography, Link, Button, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import IconSection from './IconSection';

const Hero = () => {
      const theme = useTheme()
      const pagination = {
            clickable: true,
            renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
      };

      const mySlider = [
            { text: "MEN", link: "src/images/banner-15.jpg" },
            { text: "WOMEN", link: "src/images/banner-25.jpg" },
      ]

      return (
            <Container>
                  <Box sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
                        <Swiper loop={true} pagination={pagination} modules={[Pagination]} className="mySwiper">
                              {mySlider.map((item) => {
                                    return (
                                          <SwiperSlide key={item.link}>
                                                <img src={item.link} alt="" />
                                                <Box sx={{
                                                      [theme.breakpoints.up('sm')]: {
                                                            position: "absolute", left: "10%", textAlign: "left"
                                                      },
                                                      [theme.breakpoints.down('sm')]: {
                                                            pt: 4,
                                                            pb: 6
                                                      }
                                                }}>
                                                      <Typography
                                                            sx={{ color: "#222" }}
                                                            variant="h6"
                                                      >
                                                            LIFESTYLE COLLECTION
                                                      </Typography>
                                                      <Typography
                                                            sx={{ color: "#222", fontWeight: 400, my: 1 }}
                                                            variant="h4"
                                                      >
                                                            {item.text}
                                                      </Typography>
                                                      <Stack
                                                            direction={"row"}
                                                            alignItems={"center"}>
                                                            <Typography color={"#333"} mr={1} variant="h5">
                                                                  SALE UP TO
                                                            </Typography>
                                                            <Typography color={"#D23F57"} mr={1} variant="h5">
                                                                  30% OFF
                                                            </Typography>
                                                      </Stack>
                                                      <Typography
                                                            sx={{ color: "#000", fontWeight: 300, my: 1 }}
                                                            variant="body1"
                                                      >
                                                            Get Free Shipping On Orders over $99.00
                                                      </Typography>
                                                      <Button
                                                            sx={{
                                                                  px: 5,
                                                                  py: 1,
                                                                  mt: 2,
                                                                  backgroundColor: "#222",
                                                                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                                                                  color: "#FFF",
                                                                  borderRaduis: "1px",
                                                                  "&:hover": {
                                                                        bgcolor: "#151515",
                                                                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)"
                                                                  }
                                                            }}
                                                      >
                                                            Shop now
                                                      </Button>
                                                </Box>
                                          </SwiperSlide>

                                    )
                              })}
                        </Swiper>
                        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.6%" }}>
                              <Box sx={{ position: "relative", width: "100%" }}>
                                    <img width={"100%"} src="src/images/banner-17.jpg" alt="" />
                                    <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "30px" }}>
                                          <Typography
                                                sx={{ color: "#2B3445" }}
                                          >
                                                NEW ARRIVALS
                                          </Typography>
                                          <Typography
                                                sx={{ color: "#2B3445" }}
                                          >
                                                SUMMER
                                          </Typography>
                                          <Typography variant="h6"
                                                sx={{ color: "#2B3445" }}
                                          >
                                                SALE 20% OFF
                                          </Typography>
                                          <Link
                                                sx={{
                                                      color: "#2B3445",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      gap: "5px",
                                                      transition: "0.2s",
                                                      "&:hover": {
                                                            color: "#D23F57"
                                                      }
                                                }}
                                                href="#"
                                                underline="none"
                                          >
                                                Shop now
                                                <ArrowForwardIcon />
                                          </Link>
                                    </Stack>
                              </Box>
                              <Box sx={{ position: "relative", width: "100%" }}>
                                    <img width={"100%"} src="src/images/banner-16.jpg" alt="" />
                                    <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "30px" }}>
                                          <Typography
                                                sx={{ color: "#2B3445" }}
                                          >
                                                NEW ARRIVALS
                                          </Typography>
                                          <Typography
                                                sx={{ color: "#2B3445" }}
                                          >
                                                SUMMER
                                          </Typography>
                                          <Typography variant="h6"
                                                sx={{ color: "#2B3445" }}
                                          >
                                                SALE 20% OFF
                                          </Typography>
                                          <Link
                                                sx={{
                                                      color: "#2B3445",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      gap: "5px",
                                                      transition: "0.2s",
                                                      "&:hover": {
                                                            color: "#D23F57"
                                                      }
                                                }}
                                                href="#"
                                                underline="none"
                                          >
                                                Shop now
                                                <ArrowForwardIcon />
                                          </Link>
                                    </Stack>
                              </Box>

                        </Box>
                  </Box>
                  <IconSection />
            </Container>
      )
}

export default Hero