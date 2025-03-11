// File: src/models/IdeInovasi.ts
// Schema definition for innovation ideas tracking

import mongoose, { Schema, Document } from 'mongoose';

// Interface to define the document structure
export interface IIdeInovasi extends Document {
  profilIde: {
    judulIde: string;
    namaPenggagas: string;
    nip: string;
    posisiJabatan: string;
  };
  deskripsiPermasalahan: string;
  dampakPermasalahan: string;
  deskripsiIde: string;
  keunggulanIde: string;
  manfaatFinansial: string;
  manfaatNonFinansial: string;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const IdeInovasiSchema = new Schema(
  {
    profilIde: {
      judulIde: {
        type: String,
        required: [true, 'Judul ide is required'],
      },
      namaPenggagas: {
        type: String,
        required: [true, 'Nama penggagas is required'],
      },
      nip: {
        type: String,
        required: [true, 'NIP is required'],
      },
      posisiJabatan: {
        type: String,
        required: [true, 'Posisi jabatan is required'],
      },
    },
    deskripsiPermasalahan: {
      type: String,
      default: '',
    },
    dampakPermasalahan: {
      type: String,
      default: '',
    },
    deskripsiIde: {
      type: String,
      default: '',
    },
    keunggulanIde: {
      type: String,
      default: '',
    },
    manfaatFinansial: {
      type: String,
      default: '',
    },
    manfaatNonFinansial: {
      type: String,
      default: '',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
    versionKey: false, // Disable the __v field
  }
);

// Create and export the model
export const IdeInovasi = mongoose.models.IdeInovasi || mongoose.model<IIdeInovasi>('IdeInovasi', IdeInovasiSchema);
