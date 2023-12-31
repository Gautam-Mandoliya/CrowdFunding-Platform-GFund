# CrowdFunding-Platform-GFund

## Description
This project is a decentralized crowdfunding platform built with React, Hardhat (localhost), and MetaMask. 
It allows users to create and contribute to crowdfunding campaigns using cryptocurrencies.

### Features
`Campaign Creation:` Users can create their own crowdfunding campaigns by providing details such as the title, description, funding goal, and deadline.

`Campaign Listing:` The platform provides a list of active campaigns, displaying relevant information such as the campaign title, current funding amount, and progress towards the funding goal.

`Contribution:` Users can contribute to campaigns by selecting the desired amount of cryptocurrency and confirming the transaction through MetaMask.

`Campaign Details:` Each campaign has its own details page, where users can view specific information about the campaign, such as the creator, funding goal, deadline, and total contributions.

`Refunds:` If a campaign fails to reach its funding goal within the specified deadline, contributors can request a refund of their contributed amount.

# Getting Started
   ## Installation
  1. Clone the repository: `git clone https://github.com/Gautam-Mandoliya/CrowdFunding-Platform-GFund.git`
  2. Navigate to the project directory: `cd <directory Name>`
  3. Install dependencies: `npm install`
  4. Open a second terminal and activate hardhat node:` npx hardhat node `
  5. Back in first terminal and deploy smart contract: `npx hardhat run --network localhost scripts/deploy.js`
      
   You will get a `address` when above command execute successfully.
   
  6. Copy that `address` and paste it in `contants.js` and in `CrowdFunding.js` (you have to scroll a bit to find in crowdfunding.js file)
  7. Go to directory `artifacts >> contracts >> Gfund.json`, Move Gfund.json file in `Context` directory.
     
     (Make sure you move the file, do not copy it.)

  8. Run local development: ` npm run dev `

### Or you can watch a walkthrough video of this project by clicking on the link: https://www.veed.io/view/8f80f869-06e4-4ad4-a60f-754f7983665a?panel=share
   
 #### Now you can interact with project on web browser on local host `http://localhost:3000/`

 ## Author
 Gautam Mandoliya

 ## Licence

This project is licensed under the MIT License - see the LICENSE.md file for details

   
     

