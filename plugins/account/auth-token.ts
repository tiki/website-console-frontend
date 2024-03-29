/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export interface AuthToken {
  accessToken: string
  scope: string
  expires: Date
}
