import React from "react";
import Card from "react-bootstrap/Card";
import './servicesCard.css';

const servicesData = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic websites tailored to your business needs.',
    gif: 'https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif'
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for Android and iOS platforms.',
    gif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTVhOWo2czlwNWE2YWZxanE4a3dua2J1dHN5YXY5OXZ0YWxqeG5kaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UrhiLlvR5APmw6qYVa/giphy.gif'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces for better user experience.',
    gif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWp3dXE5czIwcHp6N2Jsa3VkZWJ6ZzBwajdzMm9tNmhoazhhbmVyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnBHZGDu75XXUd2/giphy.gif'
  },
  {
    title: 'Cloud Solutions',
    description: 'Offering scalable cloud computing solutions to improve efficiency and security.',
    gif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXN5ZTllcnk4eWFndGYzeXB5bGc3dHNkNTVqMDFyeG1nNHZmcDhqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v1pjE89H3IhRdYsHs7/giphy.gif'
  },
  {
    title: 'Digital Marketing',
    description: 'Providing comprehensive digital marketing services to enhance your online presence.',
    gif: 'https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif'
  },
  {
    title: 'Social Media Marketing',
    description: 'Providing comprehensive Social media marketing services to enhance your online presence on several Digital Platforms.',
    gif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWtwc2o4enJtd25mazMyemx3eHoxcW8yMzRqMDhxZWRxam8zajA3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ymTxohR7QWdAOBuYtC/giphy.gif'
  },
  {
    title: 'AI/ML',
    description: 'With an icreasing in demand of the Artificial intellgence in the market we provide the intgratd solutions using ai and are skilled to deploy the succesfull machine learning solutions on the different platforms and till now have cattered the huge amount of audience',
    gif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWNyZ3pmNjRjajNsczZnM3c3Y2wxNGY4NDJ6eTlubHljenp1dG9ndyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ja0M23DE1fipScX58W/giphy.gif'
  },
];

function ServicesCard() {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <Card className="service-card " key={index}>
          <Card.Img variant="top" src={service.gif} alt={service.title} className="service-gif"/>
          <Card.Body>
            
            <Card.Title>{service.title}</Card.Title>
            <Card.Text>{service.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ServicesCard;
