<template>
  <div>
    <div>
      <div>
        <div>
          <h2>Update your password</h2>
        </div>
        <form @submit.prevent="store.updatePassword">
          <div>
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              v-model="store.newPassword"
              placeholder="Enter you password"
            />
            <label for="">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              v-model="store.confirmPassword"
              placeholder="Re-enter you password"
            />
          </div>
          <br />
          <div>
            <button type="submit">Update Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAuthneticationStore } from '@/stores/Authentication'
const store = useAuthneticationStore()
</script>
