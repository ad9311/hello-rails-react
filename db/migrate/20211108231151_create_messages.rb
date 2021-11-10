class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :language
      t.string :code_a
      t.string :code_b
      t.string :content

      t.timestamps
    end
  end
end
