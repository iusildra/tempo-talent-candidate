-- CreateTable
CREATE TABLE "gender" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "citizenship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "citizenship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "gender_id" INTEGER NOT NULL,
    "citizenship_id" INTEGER NOT NULL,
    "phone" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "photo" BYTEA,
    "cv" BYTEA,
    "bio" TEXT,
    "password" VARCHAR(255) NOT NULL,
    "address_id" UUID NOT NULL,

    CONSTRAINT "candidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gender_name_key" ON "gender"("name");

-- CreateIndex
CREATE UNIQUE INDEX "citizenship_name_key" ON "citizenship"("name");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_email_key" ON "candidate"("email");

-- AddForeignKey
ALTER TABLE "candidate" ADD CONSTRAINT "candidate_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate" ADD CONSTRAINT "candidate_citizenship_id_fkey" FOREIGN KEY ("citizenship_id") REFERENCES "citizenship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
