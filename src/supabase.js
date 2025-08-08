
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://liiffreqjmsfpchfltwx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpaWZmcmVxam1zZnBjaGZsdHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyODAxODQsImV4cCI6MjA2OTg1NjE4NH0.pXmvXK09r806p7y-z8pC77Q_OcnEDvoLggmX9Fw-FUE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;