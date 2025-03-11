// src/app/(DashboardLayout)/kelola-inovasi/empowerment/data/types.ts

/**
 * Type definitions for innovation empowerment program
 * Contains types for training programs, innovator levels, mentors, and gamification
 */

// Program types
export type DeliveryMethod = 'online-zoom' | 'online-self-learning' | 'offline-workshop' | 'blended';
export type ProgramLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type ProgramCategory = 'design-thinking' | 'technical-innovation' | 'business-model' | 'implementation' | 'scaling' | 'leadership';

export interface Program {
  id: string;
  title: string;
  description: string;
  deliveryMethod: DeliveryMethod;
  duration: string; // e.g. "2 days", "4 weeks"
  level: ProgramLevel;
  categories: ProgramCategory[];
  thumbnailImage: string;
  prerequisites?: string[];
  benefits: string[];
  targetAudience: string[];
  schedule?: {
    startDate: string;
    endDate: string;
    sessions?: {
      date: string;
      startTime: string;
      endTime: string;
      topic: string;
    }[];
  };
  capacity: number;
  facilitators: string[]; // IDs of mentors
  innovationCategories: ('Technical Supporting' | 'Pembangkit' | 'Optimasi Proses Bisnis' | 'Energi Baru Terbarukan' | 'Aplikasi' | 'Breakthrough')[];
  skillsGained: string[];
  relatedPrograms?: string[]; // IDs of related programs
}

// Enrollment status
export type EnrollmentStatus = 'enrolled' | 'completed' | 'interested' | 'targeted';

export interface Enrollment {
  id: string;
  programId: string;
  userId: string;
  status: EnrollmentStatus;
  enrollmentDate: string;
  completionDate?: string;
  feedback?: {
    rating: number;
    comment: string;
  };
  certificate?: {
    issued: boolean;
    issuedDate?: string;
    certificateId?: string;
  };
}

// Gamification
export type AchievementCategory = 'ideation' | 'implementation' | 'sharing' | 'learning' | 'mentoring' | 'collaboration';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  points: number;
  badgeImage: string;
  requirements: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export interface UserAchievement {
  userId: string;
  achievementId: string;
  dateEarned: string;
  evidence?: string;
}

// Innovator profiles
export type InnovatorLevel = 'Novice' | 'Explorer' | 'Creator' | 'Champion' | 'Maestro';

export interface Innovator {
  userId: string;
  name: string;
  unit: string;
  position: string;
  joinDate: string;
  profileImage: string;
  level: InnovatorLevel;
  xp: number;
  totalPoints: number;
  achievements: UserAchievement[];
  skills: {
    skillName: string;
    proficiencyLevel: number; // 1-5
  }[];
  contributions: {
    ideations: number;
    implementations: number;
    collaborations: number;
    mentorships: number;
  };
  innovationCategories: ('Technical Supporting' | 'Pembangkit' | 'Optimasi Proses Bisnis' | 'Energi Baru Terbarukan' | 'Aplikasi' | 'Breakthrough')[];
  biography: string;
}

// Mentor profiles
export type MentorSpecialization =
  | 'Design Thinking'
  | 'Technical Innovation'
  | 'Business Model Innovation'
  | 'Change Management'
  | 'Digital Transformation'
  | 'Sustainability Innovation'
  | 'Leadership'
  | 'Project Management';

export interface Mentor {
  userId: string;
  name: string;
  title: string;
  honoraryTitle?: string;
  unit: string;
  position: string;
  profileImage: string;
  specializations: MentorSpecialization[];
  biography: string;
  expertise: string[];
  certifications: string[];
  mentees: number;
  programsFacilitated: string[]; // IDs of programs
  innovationCategories: ('Technical Supporting' | 'Pembangkit' | 'Optimasi Proses Bisnis' | 'Energi Baru Terbarukan' | 'Aplikasi' | 'Breakthrough')[];
  contactEmail: string;
  availableForMentoring: boolean;
}
