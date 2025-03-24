import { createClient } from "./client";
import { Database } from "@/types/database";

export async function createOrUpdateProfile(
  userId: string,
  email: string,
  fullName: string | null,
  avatarUrl: string | null,
  provider: string
) {
  const supabase = createClient();
  
  const { data: existingProfile, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    console.error("Error fetching profile:", fetchError);
    return null;
  }

  if (existingProfile) {
    // Update existing profile
    const { data, error } = await supabase
      .from("profiles")
      .update({
        email,
        full_name: fullName,
        avatar_url: avatarUrl,
        provider,
        last_sign_in: new Date().toISOString(),
      })
      .eq("id", userId)
      .select()
      .single();

    if (error) {
      console.error("Error updating profile:", error);
      return null;
    }

    return data;
  } else {
    // Create new profile
    const { data, error } = await supabase
      .from("profiles")
      .insert({
        id: userId,
        email,
        full_name: fullName,
        avatar_url: avatarUrl,
        provider,
        last_sign_in: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating profile:", error);
      return null;
    }

    return data;
  }
}

export async function getUserProfile(userId: string) {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }

  return data;
}

export async function updateCourseProgress(
  userId: string,
  courseId: string,
  completedLessons: string[]
) {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("course_progress")
    .upsert({
      user_id: userId,
      course_id: courseId,
      completed_lessons: completedLessons,
      last_accessed: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error("Error updating course progress:", error);
    return null;
  }

  return data;
}

export async function getCourseProgress(userId: string, courseId: string) {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("course_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Error fetching course progress:", error);
    return null;
  }

  return data;
} 