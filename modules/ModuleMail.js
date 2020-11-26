const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class ModuleMail {
  constructor(fstName, lstName, comName) {
    this.id = uuidv4();
    this.fstName = fstName;
    this.lstName = lstName;
    this.comName = comName;
  }

  toJSON() {
    return {
      id: this.id,
      fstName: this.fstName,
      lstName: this.lstName,
      comName: this.comName
    }
  }

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

}

module.exports = ModuleMail
