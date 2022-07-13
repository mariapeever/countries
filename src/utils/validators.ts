import validator from "validator"

class Validate {
  fieldName: string
  value: any
  errors: { message: string[] } = { message: [] }

  constructor(fieldName: string, value: string, validators: string[]) {
    this.fieldName = fieldName
    this.value = value
    Object.entries(this).forEach(([key, val]) => {
      if(validators.includes(key)) {
        let evaluate: string = val()
        if (evaluate) {
          this.errors.message.push(val())
        }
      }
    })
  }

  required = (): string | boolean => {
    if (!this.value.toString().trim().length) {
      return `${this.fieldName} is required.`
    }
    return false
  }

  format = (): string | boolean => {
    const regExp: any = new RegExp(/^[ÅåÇçÉéA-Za-z() ]+$/)
    if (this.value.length && !regExp.test(this.value.toString().trim())) {
      return `${this.value} is not a valid ${this.fieldName}.`
    }
    return false
  }

} 

export default Validate