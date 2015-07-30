# Encrypted Field Type

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Output](#output)


<a name="introduction"></a>
## Introduction

`anomaly.field_type.encrypted`

The encrypted field type provides a basic text or password input that encrypts the value.

### Notes

- The encrypted field type is NOT meant to store user passwords.
- Encryption is not one way. Any encrypted values **may be unencrypted**.


<a name="configuration"></a>
## Configuration

**Example Definition:**

    protected $fields = [
        'example' => [
            'type'   => 'anomaly.field_type.encrypted',
            'config' => [
                'show_text'   => false,
                'auto_decode' => false
            ]
        ]
    ];

### `show_text`

Display plain text in the input by default. This option can be toggled on and off during input as well. The default value is `false`.

### `auto_decode`

Automatically decode the value when retrieving from the database. The default value is `false`.


<a name="output"></a>
## Output

This field type returns the encrypted value by default.

If `auto_decrypt` is enabled the value will be decrypted by default as well.

### `decrypted()`

Returns the decrypted value.

    // Twig usage
    {{ entry.example.decrypted }}
    
    // API usage
    $entry->example->decrypted;

### `hash()`

Returns a secure hash of the **decrypted** value.

    // Twig usage
    {{ entry.example.hash }}
    
    // API usage
    $entry->example->hash;
