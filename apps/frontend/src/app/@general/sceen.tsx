'use client';

import { TextInput, PasswordInput, Button, Container, Paper, Title, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { loginAdmin } from '@/lib/actions/admin/login';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';

const LoginScreen = () => {
  const formStatus = useFormStatus()

  useEffect(() => {
    console.log(formStatus.pending.valueOf())
  }, [formStatus.pending])

  return (
    <Container size="xs" mt={100}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper p="xl" shadow="md" radius="md">
          <Title order={2} ta="center" mb="lg">
            Login
          </Title>

          <form action={loginAdmin}>
            <TextInput
              label="Email"
              placeholder="Your email"
              name='email'
              mb="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              name='password'
              mb="md"
            />
            <Button type="submit" fullWidth loading={formStatus.pending.valueOf()}>
              Login
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default LoginScreen;
