import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = ({ onFilterChange }) => {
  const navigate=useNavigate();
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    bedrooms: '',
    budget: '',
    area: '',
    projectstatus: '',
    possession: '',
    propertytype: '',
    availability: '',
    bathrooms: '',
    areasqft: '',
    search: '',
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [filters]);

  const Proj_func=()=>{
    return navigate("/ContactUs");
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    onFilterChange(name, value);
  };

  const filterProducts = () => {
    const newProducts = listProducts.filter((item) => {
      if (filters.search && !item.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.category && item.nature.category !== filters.category) return false;
      if (filters.bathrooms && !item.nature.bathrooms.includes(filters.bathrooms)) return false;
      if (filters.bedrooms && !item.nature.bedrooms.includes(filters.bedrooms)) return false;
      if (filters.location && !item.nature.location.includes(filters.location)) return false;
      if (filters.budget && item.budget > parseInt(filters.budget)) return false;
      if (filters.projectstatus && !item.nature.projectstatus.includes(filters.projectstatus)) return false;
      if (filters.availability && !item.nature.availability.includes(filters.availability)) return false;
      if (filters.areasqft && !item.nature.areasqft.includes(filters.areasqft)) return false;
      return true;
    });
    setFilteredProducts(newProducts);
  };

  const handleMoreFiltersToggle = () => {
    setShowMoreFilters(!showMoreFilters);
  };

  return (
    <div className="containers">
      <div id="search-container">
        <input
          type="search"
          id="search-input"
          name="search"
          placeholder="Search..."
          onChange={handleChange}
          className="search"/>
      </div>
      <form className='filter' onSubmit={(e) => e.preventDefault()}>
        <br />
        <br />
        <select name="bedrooms" onChange={handleChange} className='b'>
          <option value="">Bedroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
        <select name="budget" onChange={handleChange} className='b'>
          <option value="">Budget</option>
          <option value="50000">Up to $50,000</option>
          <option value="100000">Up to $100,000</option>
          <option value="200000">Up to $200,000</option>
          <option value="300000">Up to $300,000</option>
          <option value="400000">Up to $400,000</option>
          <option value="500000">Up to $500,000</option>
        </select>
        <select name="possession" onChange={handleChange} className='b'>
          <option value="">Possession Within</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="9">9 months</option>
          <option value="12">1 year</option>
          <option value="24">2 years</option>
          <option value="36">3+ years</option>
        </select>
        <select name="location" onChange={handleChange} className='b'>
          <option value="">Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Karnataka">Karnataka</option>
          <option value="TamilNadu">TamilNadu</option>
        </select>
        <button type="button" onClick={handleMoreFiltersToggle} className='b3'>
          {showMoreFilters ? 'Less Filters' : 'More Filters'}
        </button>
        {showMoreFilters && (
          <div className="more-filters">
            <select name="projectstatus" onChange={handleChange} className='b1'  style={{height:"50px"}}>
              <option value="">Project Status</option>
              <option value="launching soon">Launching Soon</option>
              <option value="new launch">New Launch</option>
              <option value="under construction">Under Construction</option>
              <option value="ready to move in">Ready to Move in</option>
            </select>
            <select name="propertytype" onChange={handleChange} className='b1' style={{height:"50px"}}>
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plots">Plots</option>
            </select>
            <select name="availability" onChange={handleChange} className='b1'  style={{height:"50px"}}>
              <option value="">Availability</option>
              <option value="new">New</option>
              <option value="resale">Resale</option>
            </select>
            <select name="bathrooms" onChange={handleChange} className='b1'  style={{height:"50px"}}>
              <option value="">Bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <select name="areasqft" onChange={handleChange} className='b1'  style={{height:"50px"}}>
              <option value="">Area (sq.ft.)</option>
              <option value="250-500">250 sq.ft. - 500 sq.ft.</option>
              <option value="500-1000">500 sq.ft. - 1000 sq.ft.</option>
              <option value="1000-2000">1000 sq.ft. - 2000 sq.ft.</option>
              <option value="2000-4000">2000 sq.ft. - 4000 sq.ft.</option>
              <option value="4000-6000">4000 sq.ft. - 6000 sq.ft.</option>
            </select>
          </div>
        )}
      </form>
      <div id='list'>
        {filteredProducts.map((item) => (
          <div key={item.id} className='item'>
            <img src={item.image} alt={item.name} />
            <div className='title'>{item.name}</div>
            <div className='price'><i className='fa fa-inr'>{item.budget.toLocaleString()}</i>
            <button onClick={Proj_func} style={{borderRadius:"10px"}}>Intrested <i className="fa fa-heart"></i></button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
const listProducts = [
{
id: 1,
name: 'Luxury Villa',
budget: 20309,
image: 'https://balajiaws.s3.ap-south-1.amazonaws.com/Real_Estate/Developer-8/IMG-20240527-WA0051.jpg',
nature: {
bedrooms: '3',
location: 'Karnataka',
propertytype: 'villa',
bathrooms: '2',
possession: '3',
projectstatus: 'launching soon',
availability: 'new',
areasqft: '250-500',
},
},
{
id: 2,
name: 'Modern Apartment',
budget: 103090,
image: 'https://i.postimg.cc/rySzpVbG/a1.png',
nature: {
bedrooms: '2',
location: 'Karnataka',
propertytype: 'apartment',
bathrooms: '1',
possession: '6',
projectstatus: 'under construction',
availability: 'resale',
areasqft: '500-1000',
},
},
{
id: 3,
name: 'Spacious Plot',
budget: 40390,
image: 'https://i.postimg.cc/9FCPmNxM/a2.png',
nature: {
bedrooms: '0',
location: 'Karnataka',
propertytype: 'plots',
bathrooms: '0',
possession: '12',
projectstatus: 'ready to move in',
availability: 'new',
areasqft: '2000-4000',
},
},
{
id: 4,
name: 'Cozy Cottage',
budget: 53090,
image: 'https://i.postimg.cc/0Q43R1Gb/a4.png',
nature: {
bedrooms: '4',
location: 'Hyderabad',
propertytype: 'villa',
bathrooms: '3',
possession: '24',
projectstatus: 'new launch',
availability: 'new',
areasqft: '1000-2000',
},
},
{
id: 5,
name: 'Luxury Condo',
budget: 303090,
image: 'https://i.postimg.cc/3NS2b32c/a5.png',
nature: {
bedrooms: '3',
location: 'Karnataka',
propertytype: 'apartment',
bathrooms: '2',
possession: '36',
projectstatus: 'under construction',
availability: 'resale',
areasqft: '1000-2000',
},
},
{
id: 6,
name: 'Classic Villa',
budget: 70390,
image: 'https://i.postimg.cc/3r1jRQdq/house6.png',
nature: {
bedrooms: '4',
location: 'Hyderabad',
propertytype: 'villa',
bathrooms: '3',
possession: '12',
projectstatus: 'ready to move in',
availability: 'new',
areasqft: '2000-4000',
},
},
{
id: 7,
name: 'Urban Loft',
budget: 150000,
image: 'https://i.postimg.cc/wMnjvBJJ/house7.png',
nature: {
bedrooms: '1',
location: 'Hyderabad',
propertytype: 'apartment',
bathrooms: '1',
possession: '9',
projectstatus: 'under construction',
availability: 'resale',
areasqft: '500-1000',
},
},
{
id: 8,
name: 'Country House',
budget: 255000,
image: 'https://i.postimg.cc/GmFmLdp8/house8.png',
nature: {
bedrooms: '5',
location: 'Karnataka',
propertytype: 'villa',
bathrooms: '4',
possession: '24',
projectstatus: 'new launch',
availability: 'new',
areasqft: '2000-4000',
},
},
{
id: 9,
name: 'Suburban Home',
budget: 40000,
image: 'https://i.postimg.cc/L4WXvx7X/house9.png',
nature: {
bedrooms: '3',
location: 'Hyderabad',
propertytype: 'apartment',
bathrooms: '2',
possession: '6',
projectstatus: 'ready to move in',
availability: 'resale',
areasqft: '1000-2000',
},
},
{
id: 10,
name: 'Downtown Flat',
budget: 195000,
image: 'https://i.postimg.cc/266k7W7h/house10.png',
nature: {
bedrooms: '2',
location: 'TamilNadu',
propertytype: 'apartment',
bathrooms: '1',
possession: '3',
projectstatus: 'launching soon',
availability: 'new',
areasqft: '500-1000',
},
},
{
id: 11,
name: 'Lansum Elena',
budget: 80500,
image: 'https://i.postimg.cc/rppsQ78D/house11.png',
nature: {
bedrooms: '4',
location: 'TamilNadu',
propertytype: 'villa',
bathrooms: '3',
possession: '6',
projectstatus: 'ready to move in',
availability: 'new',
areasqft: '2000-4000',
},
},
{
id: 12,
name: 'Penthouse Suite',
budget: 95000,
image: 'https://i.postimg.cc/TwzP2wnb/house11.png',
nature: {
bedrooms: '3',
location: 'Karnataka',
propertytype: 'apartment',
bathrooms: '2',
possession: '12',
projectstatus: 'under construction',
availability: 'resale',
areasqft: '2000-4000',
},
},
{
id: 13,
name: 'Mountain Retreat',
budget: 15000,
image: 'https://i.postimg.cc/9MxBsPhb/house2.png',
nature: {
bedrooms: '5',
location: 'TamilNadu',
propertytype: 'villa',
bathrooms: '4',
possession: '36',
projectstatus: 'launching soon',
availability: 'new',
areasqft: '4000-6000',
},
},
{
id: 14,
name: 'City Studio',
budget: 95000,
image: 'https://i.postimg.cc/PJg1k2FW/house3.png',
nature: {
bedrooms: '1',
location: 'Hyderabad',
propertytype: 'apartment',
bathrooms: '1',
possession: '3',
projectstatus: 'new launch',
availability: 'resale',
areasqft: '250-500',
},
},
{
id: 15,
name: 'Countryside Estate',
budget: 21000,
image: 'https://i.postimg.cc/0Q43R1Gb/a4.png',
nature: {
bedrooms: '6',
location: 'Karnataka',
propertytype: 'villa',
bathrooms: '5',
possession: '9',
projectstatus: 'under construction',
availability: 'new',
areasqft: '4000-6000',
},
},
{
id: 16,
name: 'Historic Mansion',
budget: 350000,
image: 'https://i.postimg.cc/X75wg6pQ/house5.png',
nature: {
bedrooms: '7',
location: 'Hyderabad',
propertytype: 'villa',
bathrooms: '5',
possession: '24',
projectstatus: 'ready to move in',
availability: 'resale',
areasqft: '4000-6000',
},
},
{
id: 17,
name: 'Chic Townhouse',
budget: 27500,
image: 'https://i.postimg.cc/3r1jRQdq/house6.png',
nature: {
bedrooms: '2',
location: 'TamilNadu',
propertytype: 'apartment',
bathrooms: '2',
possession: '6',
projectstatus: 'new launch',
availability: 'new',
areasqft: '1000-2000',
},
},
{
id: 18,
name: 'Eco-Friendly Home',
budget: 29000,
image: 'https://i.postimg.cc/wMnjvBJJ/house7.png',
nature: {
bedrooms: '3',
location: 'TamilNadu',
propertytype: 'villa',
bathrooms: '2',
possession: '9',
projectstatus: 'under construction',
availability: 'resale',
areasqft: '2000-4000',
},
},
{
id: 19,
name: 'Luxury Penthouse',
budget: 190000,
image: 'https://i.postimg.cc/L4WXvx7X/house9.png',
nature: {
bedrooms: '4',
location: 'Karnataka',
propertytype: 'apartment',
bathrooms: '3',
possession: '12',
projectstatus: 'launching soon',
availability: 'new',
areasqft: '4000-6000',
},
},
{
id: 20,
name: 'Riverside Cottage',
budget: 45000,
image: 'https://i.postimg.cc/rppsQ78D/house11.png',
nature: {
bedrooms: '3',
location: 'Hyderabad',
propertytype: 'villa',
bathrooms: '2',
possession: '6',
projectstatus: 'ready to move in',
availability: 'new',
areasqft: '1000-2000',
},
},
{
id: 21,
name: 'Historic Mansion',
budget: 350000,
image: 'https://i.postimg.cc/X75wg6pQ/house5.png',
nature: {
bedrooms: '7',
location: 'Hyderabad',
propertytype: 'villa',
bathrooms: '5',
possession: '24',
projectstatus: 'ready to move in',
availability: 'resale',
areasqft: '4000-6000',
},
},
];

export default Projects;