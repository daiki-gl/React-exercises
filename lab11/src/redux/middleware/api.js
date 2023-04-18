import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import config from '../../config'
import { supabase } from '../../lib/supabaseClient'

export const getData = createAsyncThunk(
  'inventory/getData',
  async (order = null) => {
    const { data, error } = await supabase
      .from(config.tableName)
      .select('*')
      .order(order, { ascending: true })

    if (error) {
      toast.error(error.message)
      return []
    }

    return data
  }
)

export const getDataById = createAsyncThunk(
  'inventory/getDataById',
  async (id) => {
    const { data, error } = await supabase
      .from(config.tableName)
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      toast.error(error.message)
      return []
    }

    return data
  }
)
