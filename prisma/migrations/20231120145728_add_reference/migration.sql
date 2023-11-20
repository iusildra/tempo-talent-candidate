-- CreateTable
CREATE TABLE "reference" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "candidate_id" UUID NOT NULL,
    "recruiter_id" UUID NOT NULL,

    CONSTRAINT "reference_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reference" ADD CONSTRAINT "reference_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
