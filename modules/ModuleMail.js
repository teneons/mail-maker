const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class ModuleMail {
  constructor(fstName, lstName, comName) {
    this.id = uuidv4();
    this.fstName = fstName;
    this.lstName = lstName;
    this.comName = comName;
    this.emails = this.generEMail(fstName, lstName, comName)
  }

  //generator emails
  generEMail(n1, n2, com) {

    //generator domens
    function genrDomen(company) {
      const domens = ['com', 'me', 'ua', 'xyz', 'pro']
      const fullDomens = []
    
      for(let i of domens) { 
        fullDomens.push('@' + company.toLowerCase() + '.' +i)
      }
    
      return fullDomens
    }
  
    //create emails
    const fName = n1.toLowerCase()
    const lName = n2.toLowerCase()
    const arrEmails = []
  
    for(let i of genrDomen(com)) {
      arrEmails.push(fName + i)
      arrEmails.push(lName + i)
      arrEmails.push(fName + '.' + fName + i)
      arrEmails.push(lName + '.' + lName + i)
      arrEmails.push(fName + '.' + lName + i)
      arrEmails.push(lName + '.' + fName + i)
      arrEmails.push(fName.slice(0, 1) + '.' + lName + i)
      arrEmails.push(lName.slice(0, 1) + '.' + fName + i)
    }
  
    return arrEmails;
  }


  //creator JSON
  toJSON() {
    return {
      id: this.id,
      fstName: this.fstName,
      lstName: this.lstName,
      comName: this.comName,
      emails:  this.emails
    }
  }

  //save all data to DB
  async saveUserData() {
    const user = await ModuleMail.getAllData()
    user.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'DB', 'userData.json'),
        JSON.stringify(user),
        (err) => {
          if(err) {
            reject(err)
          } else resolve()
        }
      )
    })
  }

  //gets data from DB
  static getAllData() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'DB', 'userData.json'),
        'utf-8',
        (err, data) => {
          if(err) {
            reject(err)
          } else resolve(JSON.parse(data))
        }
      )
    })
  }

}

module.exports = ModuleMail
