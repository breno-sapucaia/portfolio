import { Redis } from "@upstash/redis";

// Mock Redis for build time when environment variables are not available
const createRedisClient = () => {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    // Return a mock Redis client for build time
    return {
      get: async () => null,
      set: async () => "OK",
      incr: async () => 1,
    } as any;
  }

  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
};

export const redis = createRedisClient();
