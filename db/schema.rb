# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_13_232136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leads", force: :cascade do |t|
    t.string "name"
    t.integer "review_score"
    t.text "description"
    t.string "picture"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "migrant_lead_reviews", force: :cascade do |t|
    t.bigint "migrant_id", null: false
    t.bigint "lead_id", null: false
    t.integer "score", default: 1, null: false
    t.text "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lead_id"], name: "index_migrant_lead_reviews_on_lead_id"
    t.index ["migrant_id"], name: "index_migrant_lead_reviews_on_migrant_id"
  end

  create_table "migrant_shelter_reviews", force: :cascade do |t|
    t.bigint "migrant_id", null: false
    t.bigint "shelter_id", null: false
    t.integer "score"
    t.text "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["migrant_id"], name: "index_migrant_shelter_reviews_on_migrant_id"
    t.index ["shelter_id"], name: "index_migrant_shelter_reviews_on_shelter_id"
  end

  create_table "migrant_shelters", force: :cascade do |t|
    t.bigint "migrant_id", null: false
    t.bigint "shelter_id", null: false
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["migrant_id"], name: "index_migrant_shelters_on_migrant_id"
    t.index ["shelter_id"], name: "index_migrant_shelters_on_shelter_id"
  end

  create_table "migrants", force: :cascade do |t|
    t.string "name"
    t.date "birthdate"
    t.string "gender"
    t.string "origin_country"
    t.boolean "unit_member"
    t.boolean "unit_leader"
    t.integer "unit_id"
    t.text "description"
    t.string "picture"
    t.boolean "processed"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shelters", force: :cascade do |t|
    t.bigint "lead_id", null: false
    t.string "name"
    t.string "address"
    t.string "state"
    t.integer "review_score"
    t.text "description"
    t.string "picture"
    t.integer "capacity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lead_id"], name: "index_shelters_on_lead_id"
  end

  create_table "units", force: :cascade do |t|
    t.bigint "migrant_id", null: false
    t.integer "person_A"
    t.integer "person_B"
    t.integer "person_C"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["migrant_id"], name: "index_units_on_migrant_id"
  end

  add_foreign_key "migrant_lead_reviews", "leads"
  add_foreign_key "migrant_lead_reviews", "migrants"
  add_foreign_key "migrant_shelter_reviews", "migrants"
  add_foreign_key "migrant_shelter_reviews", "shelters"
  add_foreign_key "migrant_shelters", "migrants"
  add_foreign_key "migrant_shelters", "shelters"
  add_foreign_key "shelters", "leads"
  add_foreign_key "units", "migrants"
end
