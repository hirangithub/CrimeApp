import React, { Component } from 'react';
import { Divider, TextField, Link, Select, MenuItem, FormControl, FormLabel, Typography } from '@material-ui/core';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TimePicker from '@mui/lab/TimePicker';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TagsInput from './TagsInput';


const PopupContent = () => {
  
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        boxShadow: 'none',
        borderRadius: '0',
        transition: 'none'
    }));
    
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());
    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };

    function handleSelecetedTags(items) {
        //console.log(items);
    }

    return (             
        
        <Stack spacing={4} direction="column" className="popup-container">

            {/* Section 1 */}         
            <Item>
                <Typography variant="h3">තොරතුරු පොතේ සටහන</Typography> 

                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">අනුක්‍රමික අංකය</FormLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>   
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul>
                        <li className="w w-65">
                            <FormLabel component="legend">තොරතුරු පොතේ නම</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                        <li className="w w-35">
                            <FormLabel component="legend">පිටුව/ චේදය</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                    </ul>
                </FormControl>    
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul>
                        <li>
                            <FormLabel component="legend">පොලිස් ස්ථානයට වාර්තා වූ දිනය</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChangeDate}
                                    renderInput={(params) => <TextField variant="outlined" {...params} />}
                                />
                            </LocalizationProvider>
                        </li>
                        <li>
                            <FormLabel component="legend">පොලිස් ස්ථානයට වාර්තා වූ වේලාව</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    value={value}
                                    onChange={handleChangeDate}
                                    renderInput={(params) => <TextField variant="outlined" {...params} />}
                                />
                            </LocalizationProvider>
                        </li>
                    </ul>
                </FormControl>   
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul className="spec-label">
                        <li>
                            <FormLabel component="legend">පැමිණිල්ල සටහන් කිරීමට ගත වූ කාලය (මිනිත්තු)</FormLabel>
                            <TextField type="number" id="outlined-basic" variant="outlined" />
                        </li>
                        <li>&nbsp;</li>
                    </ul>
                </FormControl>
            </Item>

            <Divider />   

            {/* Section 2 */}       
            <Item>
                <Typography variant="h3">අපරාධය පිළිබද විස්තරය</Typography> 

                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">සිද්ධිය වූ ග්‍රාම නිලධාරී වසම</FormLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>වසම 1</MenuItem>
                        <MenuItem value={20}>වසම 2</MenuItem>
                        <MenuItem value={30}>වසම 3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">සිද්ධිය වූ ස්ථානය</FormLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul className="spec-label">
                        <li className="last-child">
                            <FormLabel component="legend">සිද්ධිය වූ ස්ථානයේ ග්‍රිඩ් අන්කය (My location)</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                    </ul>
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul>
                        <li>
                            <FormLabel component="legend">සිද්ධ්ය වූ දිනය</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChangeDate}
                                    renderInput={(params) => <TextField variant="outlined" {...params} />}
                                />
                            </LocalizationProvider>
                        </li>
                        <li>
                            <FormLabel component="legend">සිද්ධ්ය වූ වේලාව</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    value={value}
                                    onChange={handleChangeDate}
                                    renderInput={(params) => <TextField variant="outlined" {...params} />}
                                />
                            </LocalizationProvider>
                        </li>
                    </ul>
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">අපරාධයේ වර්ගය</FormLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>මනුෂ ඝාතනයට තැත් කිරීම / සිය පණ හාණිකර ගැනීමට අනුබල දීම</MenuItem>
                        <MenuItem value={20}>සිය පණ හාණිකර ගැනීමට අනුබල දීම</MenuItem>
                        <MenuItem value={30}>මනුෂ ඝාතනයට තැත් කිරීම</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">අපරාධය පිළිබද කෙටි විස්තරය</FormLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">නීතියේ වගන්ති</FormLabel>
                    <TagsInput
                        selectedTags={handleSelecetedTags}  
                        variant="outlined"
                        id="tags"
                        name="tags"
                        placeholder="Select or add tags"
                    />
                </FormControl>
            </Item>

            <Divider />  

            {/* Section 3 */}       
            <Item>
                <Typography variant="h3">පැමිණිලිකරු පිළිබද විස්තර</Typography> 
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">නීතියේ වගන්ති</FormLabel>
                    <TagsInput
                        selectedTags={handleSelecetedTags}  
                        variant="outlined"
                        id="tags"
                        name="tags"
                        placeholder="Select or add tags"
                    />
                </FormControl>

                <Typography variant="h4">දේපල සම්බන්ද තොරතුරු</Typography> 
                <div className="bg-on">
                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                        <ul>
                            <li className="w w-50">
                                <FormLabel component="legend">දේපල</FormLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>රත්‍රන් මාල</MenuItem>
                                    <MenuItem value={20}>පරිගණක</MenuItem>
                                    <MenuItem value={30}>ජංගම දුරකථන</MenuItem>
                                </Select>
                            </li>
                            <li className="w w-25">
                                <FormLabel component="legend">වටිනාකම</FormLabel>
                                <TextField id="outlined-basic" variant="outlined" />
                            </li>
                            <li className="w w-25">
                                <FormLabel component="legend">&nbsp;</FormLabel>
                                <Link href="#" underline="none" style={{ display: 'flex', alignItems: 'center', marginTop: '.5rem' }}>
                                    <AddCircleOutlineIcon style={{ marginRight: '.3rem' }} /> Add item
                                </Link>
                            </li>
                        </ul>
                    </FormControl>
                </div>
                <div className="inner-form-control cal-table">
                    <div>
                        <ul>
                            <li className="w w-50">
                                sd asd a da da sd
                            </li>
                            <li className="w w-25">
                                43535345345345
                            </li>
                            <li className="w w-25">
                                <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                            </li>
                        </ul>
                        <ul>
                            <li className="w w-50">
                                sd asd a da da sd
                            </li>
                            <li className="w w-25">
                                43535345345345
                            </li>
                            <li className="w w-25">
                                <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                            </li>
                        </ul>
                    </div>
                    <Divider />
                    <div className="footer"> 
                        <ul>
                            <li className="w w-50">
                                මුළු වටිනාකම
                            </li>
                            <li className="w w-25">
                                1,250,000.00
                            </li>
                            <li className="w w-25">
                                &nbsp;
                            </li>
                        </ul>
                    </div>
                </div> 
                
                <br />

                <Typography variant="h4">සොයාගත් දේපල සම්බන්ද තොරතුරු</Typography> 
                <div className="bg-on">
                    <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                        <ul>
                            <li className="w w-50">
                                <FormLabel component="legend">දේපල</FormLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>රත්‍රන් මාල</MenuItem>
                                    <MenuItem value={20}>පරිගණක</MenuItem>
                                    <MenuItem value={30}>ජංගම දුරකථන</MenuItem>
                                </Select>
                            </li>
                            <li className="w w-25">
                                <FormLabel component="legend">වටිනාකම</FormLabel>
                                <TextField id="outlined-basic" variant="outlined" />
                            </li>
                            <li className="w w-25">
                                <FormLabel component="legend">&nbsp;</FormLabel>
                                <Link href="#" underline="none" style={{ display: 'flex', alignItems: 'center', marginTop: '.5rem' }}>
                                    <AddCircleOutlineIcon style={{ marginRight: '.3rem' }} /> Add item
                                </Link>
                            </li>
                        </ul>
                    </FormControl>
                </div>
                <div className="inner-form-control cal-table">
                    <div>
                        <ul>
                            <li className="w w-50">
                                sd asd a da da sd
                            </li>
                            <li className="w w-25">
                                43535345345345
                            </li>
                            <li className="w w-25">
                                <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                            </li>
                        </ul>
                        <ul>
                            <li className="w w-50">
                                sd asd a da da sd
                            </li>
                            <li className="w w-25">
                                43535345345345
                            </li>
                            <li className="w w-25">
                                <Link href="#" variant="body2"><DeleteIcon /></Link>                                                    
                            </li>
                        </ul>
                    </div>
                    <Divider />
                    <div className="footer"> 
                        <ul>
                            <li className="w w-50">
                                මුළු වටිනාකම
                            </li>
                            <li className="w w-25">
                                1,250,000.00
                            </li>
                            <li className="w w-25">
                                &nbsp;
                            </li>
                        </ul>
                    </div>
                </div> 
            </Item>

            <Divider />  

            {/* Section 4 */}       
            <Item>
                <Typography variant="h3">ස්ථිර කිරීම</Typography> 

                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul>
                        <li>
                            <FormLabel component="legend">ජාතික හැඳුනුම්පත් අංකය</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                        <li>
                            <FormLabel component="legend">විදේශ ගමන් බලපත්‍ර අංකය</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                    </ul>
                </FormControl>  
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">පැමිණිලිකරුගේ නම</FormLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">ලිපිනය</FormLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul>
                        <li>
                            <FormLabel component="legend">වයස</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                        <li>
                            <FormLabel component="legend">ස්ත්‍රී/පුරුෂ භාවය</FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>පුරුෂ</MenuItem>
                                <MenuItem value={20}>ස්ත්‍රී</MenuItem>
                            </Select>
                        </li>
                    </ul>
                </FormControl>  
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <ul>
                        <li>
                            <FormLabel component="legend">දුරකථන අංකය 1</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                        <li>
                            <FormLabel component="legend">දුරකථන අංකය 2</FormLabel>
                            <TextField id="outlined-basic" variant="outlined" />
                        </li>
                    </ul>
                </FormControl>  
                <FormControl variant="outlined" component="fieldset" className="inner-form-control">
                    <FormLabel component="legend">පැමිණිලිකරු වින්දිතයා නොවන්නේ නම් පැමිණිලිකරුට වින්දිතයාට ඇති සම්බන්ධතාවය</FormLabel>
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>
            </Item>
            
        </Stack>

    )
  }


export default PopupContent;