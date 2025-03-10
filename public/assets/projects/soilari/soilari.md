# Overview

This project was designed for the 2023 Hack the Globe (HTG) Hackathon. I worked closely with a team of 5 to design and build this solution over 2 weeks.

# Problem

Farming is becoming very data driven in current times, which can be used to optimize decisions about irrigation, fertilization and even farm expansion. This is commonplace in large-scale industrial farms, however not in small farms, especially in remote locations of the world. The problem that we identified was that smallholder farmers lack the technical background needed to analyze existing soil and climate data, and apply those insights to optimize their farming techniques. Our main priority was farmers in Sub-Saharan Africa, however we looked to develop a solution that could be extended further.

# Solution

Our solution consisted of a two part information system, making complex information and datasets easily accessible and actionable. The first part was a website which gave users insightful data about their soil composition, as well as recommended fertilizers and irrigation techniques. This allows farmers with a variety of resources to optimized their setups. The second part of the system consisted of an integrated SMS platform (built with Twilio, code on GitHub above), allowing accessibility in all areas of the world.

The demo of the web app can be found here:

<iframe src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/proto/iNCC6Ddj1qIEYixaCj5DYA?scaling=scale-down" frameborder="0" width="700" style='height:408px' allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Technical

This solution was built using the Twilio SMS API. This balanced ease of use, development time, and capability. The data used to inform the farmers was informed by the [Soilgrids](https://www.isric.org/explore/soilgrids) API, which has very accurate and precise data about soil composition worldwide. This data was manipulated through stoichiometry and mathematics to provide optimal action suggestions, based on field research. Additionally crop data was gathered from a variety of sources and past data was taken into account when providing these recommendations.

# Result

In the end, we were very happy with our results, designing a full application and solution to a problem we were passionate about. However, as with many hackathon solutions, it was not fully flushed out and not enough research was done in the initial development. As our team discussed with a mentor, it was found that this is not really solving any true constraint being faces, and that there are more pressing issues which would not allow this to be a feasible business. Nevertheless, it was a very fun and interesting project that we learned a lot from.

# Presentation

<iframe src="https://docs.google.com/presentation/d/1YIo1H_O8AuMz9YyJ_MVZiyW2YB4xkgD7T_IZu3uqsRQ/embed?start=false&loop=true&delayms=3000" frameborder="0" width="700" style='height:408px' allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

