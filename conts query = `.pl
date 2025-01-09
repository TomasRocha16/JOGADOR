conts query = `
query Test ($navId:String!) {
navigation (where: {navID: $navId})} {
 id
 link
  externalUrl
  displayText
  page {
   ... on Page {
   id
   slug
   }
  }
 }
   navId
   }
  }
   `
