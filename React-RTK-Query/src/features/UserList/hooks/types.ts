export type User =  {
    id: string;
    firstName: string;
    lastname: string;
    //add other properties here
    status: 'idle' | 'loading' | 'failed';
  }