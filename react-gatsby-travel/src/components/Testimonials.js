import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';

const Testimonials = () => {
   return (
      <TestimonialsContainer>
         <TopLine>
            Testimonials
         </TopLine>
         <Description>
            What people are Saying
         </Description>
         <ContentWrapper>
            <ColumnOne>
               <Testimonial>
                  <IoMdChechmarkCircleOutline />
                  <h3>Sean Michaels</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto deleniti. Nisi commodi quis labore.</p>
               </Testimonial>
               <Testimonial>
                  <FaRegLightbulb />
                  <h3>Sarah Kin</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto deleniti. Nisi commodi quis labore.</p>
               </Testimonial>
            </ColumnOne>
            <ColumnTwo>
               image
            </ColumnTwo>
         </ContentWrapper>
      </TestimonialsContainer>
   )
}

export default Testimonials
