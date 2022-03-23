import React from "react";
import {useState,useEffect} from "react";
import { MultiSelect } from "react-multi-select-component";
import './SearchFilter.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import styled, {useTheme} from "styled-components";
import {ThemeProvider} from "styled-components";
import DateTimePicker from 'react-datetime-picker';

export default function SearchFilter(props)
{
    const [selectedOption, setSelectedOption] = useState([]);
    const [search, setSearch] = useState('');
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState();
    const themes = useTheme();

    const applySearch = async () => {
        var channels = [];
        selectedOption.length ? selectedOption.map(each => channels.push(each.value)) : (channels = []);
        props.filterNotifications(search, channels, startDate,endDate);
    }
    const reset = async () => {
        setStartDate(null);
        setEndDate(null);
        setSearch('');
        setSelectedOption([]);
        props.reset();
    }
    var options = [];
    props.notifications.map(each => options.push({label : each.app , value : each.channel }));
    var uniqueOptions = [...new Map(options.map((item) => [item["value"], item])).values()];
      
    return(
     <ThemeProvider theme={themes}>
         <Container>
            <TopBar>
                <Left>
                {themes.scheme === 'light' ? ( <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src='/svg/filterIcon.svg' />) : ( <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src='/svg/filterw.png' />)}
                    <span style={{marginTop:"1rem", fontWeight:"400", color:"#B4B4B4"}}>Filter Notifications</span> 
                </Left>
                <Buttons>
                    <ButtonFeed bgColor='#e20880' onClick={applySearch}>
                            Apply
                    </ButtonFeed>    
                    <ButtonFeed bgColor='#35c5f3' onClick={reset}>
                        Reset
                    </ButtonFeed> 
                </Buttons>
            </TopBar>

            <SearchOptions>
                <SectionSearch mright='3.5rem'>
                 
                <SelectChannel>
                    <MultiSelect
                        options={uniqueOptions}
                        valueRenderer={ () => {
                            if(selectedOption.length === 0)  return 'Show Notifications from'
                            return `${selectedOption.length} Selected`
                        }}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        labelledBy="Search Notifications from"
                        className="DropDown"
                        placeholder="Search Notifications from"
                    />

                </SelectChannel>
                <InputWrapper>
                
                <input value={search} type="text" className="input2" placeholder="Search With Keyword" onChange={(e) => {
                    setSearch(e.target.value);
                
                }}/>
                </InputWrapper> 
                </SectionSearch>
                <SectionSearch mleft='3.5rem'>
                        <RangeSection>
                            <DateTimePicker className="date" value={startDate} onChange={setStartDate}/>
                        </RangeSection>
                        <RangeSection mtop="1.5rem">
                            <DateTimePicker className="date" value={endDate} onChange={setEndDate}/>
                        </RangeSection>
                </SectionSearch>
            </SearchOptions>
         </Container>
    </ThemeProvider>
    )
}


const SelectChannel = styled.div`
border: 1px solid ${props => props.theme.faucetBorder};
border-radius: 5px;
font-family: Source Sans Pro;
`;

const RangeSection = styled.div`
display: flex;
flex-direction: row;
border: 1px solid ${props => props.theme.faucetBorder};

border-radius: 5px;
justify-content: space-between;
height: "40px";
margin-top:  ${(props) => (props.mtop ? props.mtop : "")};
position: relative;
`;

const Container = styled.div`
width: -webkit-fill-available;
display: flex;
flex-direction: column;
// border:  0.5px solid #674C9F;
// border:${(props) => (props.Border ? props.Border : "")}
border: 1px solid ${props => props.theme.faucetBorder};
border-radius: 10px;
margin: 1.3rem;
`;


const TopBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom: 1px solid ${props => props.theme.faucetBorder};;
margin-bottom: 1rem;
font-family: Source Sans Pro;
`;

const Left = styled.div`
display: flex;
flex-direction: row;
font-family: Source Sans Pro;
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 2rem;
margin-top: 0.3rem;
margin-bottom: 0.5rem;
@media (max-width: 600px)
{
    margin-right: 1.5rem;
    margin-left: 2rem;
    width: 4rem;
    flex-direction: column;
    
}
font-family: Source Sans Pro;

`;

const ButtonFeed = styled.button`

height: 30px;
margin :3px;
color: white;
width: 75px;
border-radius: 5px;
border: 2px solid white;
background-color:  ${(props) => (props.bgColor ? props.bgColor : "")};
margin-right:  ${(props) => (props.mright ? props.mright : "")};
&:hover {
  cursor: pointer;
  pointer: hand;
}
@media (max-width: 500px)
{
    margin-right:  ${(props) => (props.mright ? "1.5rem" : "")};
}
font-family: Source Sans Pro;
`;


const SearchOptions = styled.div`
display: flex;
flex-direction: row;
margin-left: 2rem;
margin-right: 2rem;
margin-bottom: 1rem;
justify-content: space-between;
font-family: Source Sans Pro;

@media(max-width: 600px)
{
    flex-direction: column;
    justify-content: center;
    align-item: center;
}
`;

const SectionSearch = styled.div`
disply: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
font-family: Source Sans Pro;
@media(min-width: 600px)
{
    margin-right:  ${(props) => (props.mright ? props.mright : "")};
    margin-left:  ${(props) => (props.mleft ? props.mleft : "")};
}
`;


const InputWrapper = styled.div`
    display:flex;
    height: 40px;
    
border: 1px solid ${props => props.theme.faucetBorder};
    border-radius: 5px;
    margin-top: 1.5rem;
    width: 100%;
    padding: 1px;
    @media(max-width:600px)
    {
        margin-bottom: 1rem;
    }
    

`;



