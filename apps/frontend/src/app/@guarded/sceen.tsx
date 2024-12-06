'use client';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Container, Paper, Title, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const LoginScreen = () => {
  const {push} = useRouter()
  
  return (
    <Container size="xs" mt={100}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper p="xl" shadow="md" radius="md">
          <Title order={2} ta="center" mb="lg">
            Kamu sudah login
          </Title>
          <Button fullWidth onClick={()=>push('/beranda')}>
            Masuk Beranda
          </Button>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default LoginScreen;
