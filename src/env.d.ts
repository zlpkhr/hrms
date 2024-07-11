declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HRMS_HOSTNAME: string;
      HRMS_PORT: string;
    }
  }
}

export {};
