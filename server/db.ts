import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Enrollment functions
export async function createEnrollment(userId: string, courseId: string) {
  return prisma.enrollment.create({ data: { userId, courseId, enrolledAt: new Date() } });
}

export async function getEnrollment(userId: string, courseId: string) {
  return prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });
}

export async function updateModuleProgress(userId: string, moduleId: number, progress: number) {
  return prisma.moduleProgress.upsert({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
    update: {
      progress,
      updatedAt: new Date(),
    },
    create: {
      userId,
      moduleId,
      progress,
      updatedAt: new Date(),
    },
  });
}

export async function getModuleProgress(userId: string, moduleId: number) {
  return prisma.moduleProgress.findUnique({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
  });
}

// Quiz functions
export async function recordQuizAttempt(userId: string, quizId: number, score: number) {
  return prisma.quizAttempt.create({
    data: {
      userId,
      quizId,
      score,
      attemptedAt: new Date(),
    },
  });
}

export async function getQuizAttempts(userId: string, quizId: number) {
  return prisma.quizAttempt.findMany({
    where: {
      userId,
      quizId,
    },
  });
}

// Lab functions
export async function recordLabCompletion(userId: string, labId: number, completed: boolean) {
  return prisma.labCompletion.upsert({
    where: {
      userId_labId: {
        userId,
        labId,
      },
    },
    update: {
      completed,
      updatedAt: new Date(),
    },
    create: {
      userId,
      labId,
      completed,
      updatedAt: new Date(),
    },
  });
}

export async function getLabCompletion(userId: string, labId: number) {
  return prisma.labCompletion.findUnique({
    where: {
      userId_labId: {
        userId,
        labId,
      },
    },
  });
}

// Exam functions
export async function recordExamScore(userId: string, examId: number, score: number) {
  return prisma.examScore.create({
    data: {
      userId,
      examId,
      score,
      takenAt: new Date(),
    },
  });
}

export async function getExamScores(userId: string, examId: number) {
  return prisma.examScore.findMany({
    where: {
      userId,
      examId,
    },
  });
}

// Certificate functions
export async function issueCertificate(userId: string, courseId: string, certificateUrl: string) {
  return prisma.certificate.create({
    data: {
      userId,
      courseId,
      certificateUrl,
      issuedAt: new Date(),
    },
  });
}

export async function getCertificate(userId: string, courseId: string) {
  return prisma.certificate.findFirst({
    where: {
      userId,
      courseId,
    },
  });
}

// Student notes functions
export async function addStudentNote(userId: string, moduleId: number, content: string) {
  return prisma.studentNote.create({
    data: {
      userId,
      moduleId,
      content,
      createdAt: new Date(),
    },
  });
}

export async function getStudentNotes(userId: string, moduleId: number) {
  return prisma.studentNote.findMany({
    where: {
      userId,
      moduleId,
    },
  });
}

// Analytics functions
export async function countEnrollmentsByCourse(courseId: string) {
  return prisma.enrollment.count({
    where: {
      courseId,
    },
  });
}

export async function getAverageQuizScoreByQuiz(quizId: number) {
  const result = await prisma.quizAttempt.aggregate({
    where: { quizId },
    _avg: { score: true },
  });
  return result._avg.score;
}

export async function countCompletedLabsByLab(labId: number) {
  return prisma.labCompletion.count({
    where: {
      labId,
      completed: true,
    },
  });
}
