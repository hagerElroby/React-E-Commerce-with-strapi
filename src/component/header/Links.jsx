import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Links = ({ title }) => {
      return (
            <Box sx={{
                  ":hover .show-when-hover": { display: "block" },
                  display: "flex",
                  alignItems: "center",
                  position: "relative"
            }}>
                  <Typography variant='body1'>
                        {title}
                  </Typography>
                  <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

                  <Box className='show-when-hover'
                        sx={{
                              position: "absolute",
                              top: "100%",
                              minWidth: "170px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              display: "none",
                              zIndex: 2
                        }}>
                        <Paper sx={{ mt: 2 }}>
                              <nav aria-label="secondary mailbox folders">
                                    <List>
                                          <ListItem disablePadding>
                                                <ListItemButton
                                                      sx={{ display: "flex", p: 0, px: 1.5 }}
                                                >
                                                      <ListItemText
                                                            sx={{ "& .Muitypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                                            primary="Dashboard" />
                                                </ListItemButton>
                                          </ListItem>
                                          <ListItem sx={{ position: "relative", ":hover .sub-link": { display: "block" }, ":hover": { cursor: "pointer" } }} disablePadding>
                                                <ListItemButton
                                                      sx={{ display: "flex", p: 0, px: 1.5 }}
                                                >
                                                      <ListItemText
                                                            sx={{ "& .Muitypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                                            primary="Products" />
                                                      <Box flexGrow={1} />
                                                      <KeyboardArrowRightOutlined fontSize='small' />
                                                </ListItemButton>
                                                <Box className='sub-link'
                                                      sx={{ position: "absolute", left: "100%", top: 0, display: "none" }}>
                                                      <Paper sx={{ ml: 1, minWidth: 150 }}>
                                                            <nav aria-label="secondary mailbox folders">
                                                                  <List>
                                                                        <ListItem disablePadding>
                                                                              <ListItemButton
                                                                                    sx={{ display: "flex", p: 0, px: 1.5 }}
                                                                              >
                                                                                    <ListItemText
                                                                                          sx={{ "& .Muitypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                                                                          primary="Add Product" />
                                                                              </ListItemButton>
                                                                        </ListItem>
                                                                        <ListItem disablePadding>
                                                                              <ListItemButton component="a" href="#simple-list">
                                                                                    <ListItemText primary="Edit Product" />
                                                                              </ListItemButton>
                                                                        </ListItem>
                                                                  </List>
                                                            </nav>
                                                      </Paper>
                                                </Box>
                                          </ListItem>
                                          <ListItem disablePadding>
                                                <ListItemButton
                                                      sx={{ display: "flex", p: 0, px: 1.5 }}
                                                >
                                                      <ListItemText
                                                            sx={{ "& .Muitypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                                            primary="Orders" />
                                                </ListItemButton>
                                          </ListItem>
                                          <ListItem disablePadding>
                                                <ListItemButton
                                                      sx={{ display: "flex", p: 0, px: 1.5 }}
                                                      component="a" href="#simple-list">
                                                      <ListItemText
                                                            sx={{ "& .Muitypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                                            primary="Profile" />
                                                </ListItemButton>
                                          </ListItem>
                                    </List>
                              </nav>
                        </Paper>
                  </Box>
            </Box>
      )
}

export default Links