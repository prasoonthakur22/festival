module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84abc787f4dc887e7b304c1ec538510e'),
  },
});
