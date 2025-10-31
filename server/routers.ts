import { router, protectedProcedure, adminProcedure } from '~/server/api/trpc';
import { z } from 'zod';
import * as db from './db';

export const appRouter = router({
  enroll: protectedProcedure
    .input(z.object({ userId: z.string(), courseId: z.string() }))
    .mutation(({ input }) => db.createEnrollment(input.userId, input.courseId)),

  getEnrollment: protectedProcedure
    .input(z.object({ userId: z.string(), courseId: z.string() }))
    .query(({ input }) => db.getEnrollment(input.userId, input.courseId)),

  updateModuleProgress: protectedProcedure
    .input(z.object({ userId: z.string(), moduleId: z.number(), progress: z.number() }))
    .mutation(({ input }) => db.updateModuleProgress(input.userId, input.moduleId, input.progress)),

  getModuleProgress: protectedProcedure
    .input(z.object({ userId: z.string(), moduleId: z.number() }))
    .query(({ input }) => db.getModuleProgress(input.userId, input.moduleId)),

  recordQuizAttempt: protectedProcedure
    .input(z.object({ userId: z.string(), quizId: z.number(), score: z.number() }))
    .mutation(({ input }) => db.recordQuizAttempt(input.userId, input.quizId, input.score)),

  getQuizAttempts: protectedProcedure
    .input(z.object({ userId: z.string(), quizId: z.number() }))
    .query(({ input }) => db.getQuizAttempts(input.userId, input.quizId)),

  recordLabCompletion: protectedProcedure
    .input(z.object({ userId: z.string(), labId: z.number(), completed: z.boolean() }))
    .mutation(({ input }) => db.recordLabCompletion(input.userId, input.labId, input.completed)),

  getLabCompletion: protectedProcedure
    .input(z.object({ userId: z.string(), labId: z.number() }))
    .query(({ input }) => db.getLabCompletion(input.userId, input.labId)),

  recordExamScore: protectedProcedure
    .input(z.object({ userId: z.string(), examId: z.number(), score: z.number() }))
    .mutation(({ input }) => db.recordExamScore(input.userId, input.examId, input.score)),

  getExamScores: protectedProcedure
    .input(z.object({ userId: z.string(), examId: z.number() }))
    .query(({ input }) => db.getExamScores(input.userId, input.examId)),

  issueCertificate: protectedProcedure
    .input(z.object({ userId: z.string(), courseId: z.string(), certificateUrl: z.string().url() }))
    .mutation(({ input }) =>
      db.issueCertificate(input.userId, input.courseId, input.certificateUrl),
    ),

  getCertificate: protectedProcedure
    .input(z.object({ userId: z.string(), courseId: z.string() }))
    .query(({ input }) => db.getCertificate(input.userId, input.courseId)),

  addStudentNote: protectedProcedure
    .input(z.object({ userId: z.string(), moduleId: z.number(), content: z.string() }))
    .mutation(({ input }) => db.addStudentNote(input.userId, input.moduleId, input.content)),

  getStudentNotes: protectedProcedure
    .input(z.object({ userId: z.string(), moduleId: z.number() }))
    .query(({ input }) => db.getStudentNotes(input.userId, input.moduleId)),

  countEnrollmentsByCourse: adminProcedure
    .input(z.object({ courseId: z.string() }))
    .query(({ input }) => db.countEnrollmentsByCourse(input.courseId)),

  getAverageQuizScoreByQuiz: adminProcedure
    .input(z.object({ quizId: z.number() }))
    .query(({ input }) => db.getAverageQuizScoreByQuiz(input.quizId)),

  countCompletedLabsByLab: adminProcedure
    .input(z.object({ labId: z.number() }))
    .query(({ input }) => db.countCompletedLabsByLab(input.labId)),
});

export type AppRouter = typeof appRouter;
