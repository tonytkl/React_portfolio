# Welcme to my portfolio website!

This project was built with React and enchanced responsiveness with Bootstrap. It is a single page application that showcases my skills and projects. It also has a contact form that allows users to send me a message.

The project was developed due to the reason that I could not find any simple and clean portfolio website that I liked. Now that I have built one, I want to share it with everyone! Feel free to use it as a template for your own portfolio website. All I ask is that you give me credit for the design and code.

The content of the website is done through JSON files. This allows for easy editing of the content without having to touch the code. The JSON files are located in the `src/dataSource` folder.

## Step to use this project as a template after cloning the repository

### 1. Change main profile picture

All images used in the project is located at `src/images`. Feel free to replace the `profile.jpg` with your own profile picture.

### 2. Change the content

Content of all sections can be found in the `src/dataSource` folder. The content is separated into different key of the JSON file for each section. Note that if the content is wrapped in the array, it means that the content is a list of items. For example, the `link` in `aboutMe` section is a list of links. You can add as many links as you want.

Another point to note is that I prepare the icon for Instagram, Linkedin, Twitch, and Github. If you want to add more icon, feel free to explore from [FontAwesome](https://fontawesome.com/icons).

### 3. Change the color theme

Feel free to change the color theme of the website. The color theme is located at `src/styles,css`. You can change the color of the website by changing the value of the variables.

### 4. Change the favicon and tags in HTML

There is some meta tags and favicon that you might want to change. They are located at `public/index.html`.

### 5. Register emailing template with EmailJS

To make the contact section work, you need to register an account with [EmailJS](https://www.emailjs.com/). Once you have registered, you need to create an email template. The credentials require in this template are:

- `SERVICE_ID`
- `TEMPLATE_ID`
- `PUBLIC_KEY`

Put all those credentials in the environment file `.env` at the root of the project. You can find the template ID in the EmailJS dashboard. The service ID and public key can be found in the EmailJS dashboard under the integration tab. If you are not sure how to do this, you can follow the instruction [here](https://www.emailjs.com/docs/tutorial/overview/). In case you want to publish the website, don't forget to add the value of these credentials to the environment variable in the hosting platform.

And you are done! You can now deploy the website to your favorite hosting platform. Enjoy!
