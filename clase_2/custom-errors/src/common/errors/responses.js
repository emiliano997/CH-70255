export class ErrorResponses {
  static generateUserErrorResponse({ firstName, lastName, email }) {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    * firstName: Needs to be a String, recieved ${firstName}
    * lastName : Needs to be a String, recieved ${lastName}
    * email    : Needs to be a String, recieved ${email}`;
  }

  static generateNotFoundResponse({ entity, id }) {
    return `The ${entity} with id ${id} was not found`;
  }
}
