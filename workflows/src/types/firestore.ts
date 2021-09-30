type ArrayValue = Value[];
type MapValue = Record<string, Value>;

/**
 * Eg 9999-12-31T23:59:59.999999999Z
 */
type Timestamp = string;

/**
 * Eg projects/{project_id}/databases/{database_id}/documents/{document_path}
 */
type Reference = string;

type NumericValue = 
  { doubleValue: number } |
  { integerValue: number };

type Value = 
  NumericValue |
  { arrayValue: ArrayValue } |
  { booleanValue: boolean } |
  { mapValue: MapValue } |
  { nullValue: "NULL_VALUE" } |
  { referenceValue: string } |
  { stringValue: string } |
  { timestampValue: Timestamp };

type OutputDocument = {
  createTime: Timestamp;
  fields: Record<string, Value>;
  name: Reference;
  updateTime: Timestamp;
};

type InputDocument = Pick<OutputDocument, "fields" | "name">;

type Precondition = {
  exists?: boolean;
  updateTime?: Timestamp;
}

type FieldTransform = {
  appendMissingElements?: ArrayValue;
  fieldPath: string;
  increment?: NumericValue;
  maximum?: NumericValue;
  minimum?: NumericValue;
  removeAllFromArray?: ArrayValue;
  setToServerValue?: "REQUEST_TIME";
}

type DocumentTransform = {
  document: string;
  fieldTransforms: FieldTransform[];
}

type WriteBase = {
  currentDocument?: Precondition;
}

export type WriteDelete = WriteBase & {
  delete: Reference;
};

type DocumentMask = {
  fieldPaths: string[];
}

export type WriteUpdate = WriteBase & {
  update: InputDocument;
  updateMask?: DocumentMask;
  updateTransforms?: FieldTransform[];
}

export type WriteTransform = WriteBase & {
  transform: DocumentTransform;
}

type Write = WriteDelete | WriteUpdate | WriteTransform;

type BatchWriteRequest = {
  writes: Write[];
}

export type WriteDocumentStep = {
  call: "googleapis.firestore.v1.projects.databases.documents.batchWrite";
  args: {
    database: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)"}';
    body: BatchWriteRequest;
  }
}
